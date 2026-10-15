// Nest JS
import { HttpStatus, Injectable, Logger } from "@nestjs/common";

// entity imports
import { UserEntity } from "src/modules/features/user/entities/user.entity";

// service imports
import { OtpService } from "src/modules/features/otp/otp.service";
import { UserService } from "src/modules/features/user/user.service";
import { JwtUserService } from "../../jwt/services/jwt-user.service";

// utils imports
import { throwHttpException } from "src/utils/app/httpException";
import { comparePassword, hashPassword } from "src/utils/hashing/bcrypt";
import { OTP_REASON_ENUM } from "src/modules/features/otp/enums/otp-reason.enum";
import { forgotPasswordOtpTemplate } from "../../mail/template/forget-password";
import { MailService } from "../../mail/mail.service";
import { HttpStatusCode } from "axios";
import {
  EnglishErrorMessages,
  FrenchErrorMessages,
} from "src/types/enums/user/error-messages.enum";
import { USER_SELECTED_LANGUAGE } from "src/modules/features/user/enums/user-onboarding-status.enum";
import { getLocalizedMessage } from "src/utils/app/get-localized-message";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtUserService,
    private readonly otpService: OtpService,
    private readonly mailService: MailService,
  ) {}

  async login({
    email,
    password,
    language,
  }: {
    email: string;
    password: string;
    language?: USER_SELECTED_LANGUAGE;
  }): Promise<{ user: UserEntity; token: string }> {
    email = email.toLowerCase();
    const user = await this.userService.getUserFromDB({
      where: { email },
      relations: { host: true },
    });

    if (!user) {
      if (!language) {
        throwHttpException(
          [EnglishErrorMessages.USER_NOT_FOUND],
          HttpStatusCode.Unauthorized,
          HttpStatus.UNAUTHORIZED,
        );
      }
      throwHttpException(
        language === USER_SELECTED_LANGUAGE.ENGLISH
          ? [EnglishErrorMessages.USER_NOT_FOUND]
          : [FrenchErrorMessages.USER_NOT_FOUND],
        HttpStatusCode.NotFound,
        HttpStatus.NOT_FOUND,
      );
    }

    const passwordMatched = comparePassword(password, user.password);

    if (!passwordMatched) {
      if (!language) {
        throwHttpException(
          [EnglishErrorMessages.INVALID_CREDENTIALS],
          HttpStatusCode.Unauthorized,
          HttpStatus.UNAUTHORIZED,
        );
      }
      throwHttpException(
        language === USER_SELECTED_LANGUAGE.ENGLISH
          ? [EnglishErrorMessages.INVALID_CREDENTIALS]
          : [FrenchErrorMessages.INVALID_CREDENTIALS],
        HttpStatusCode.Unauthorized,
        HttpStatus.UNAUTHORIZED,
      );
    }
    await this.userService.updateUser({
      where: { id: user.id },
      data: { selected_language: language },
    });
    const token = this.jwtService.generateJWT(user);
    delete user.password;

    return { user, token };
  }

  // ======================================================= Request OTP =======================================================
  /**
   * @description This method is used to generate an OTP (One-Time Password) code and sends it to the user's email address.
   *
   * @param {Object} options - An object containing the necessary parameters for the password reset process.
   * @param {string} options.email - The email address of the user who has forgotten their password.
   * @param {OTP_REASON_ENUM} options.reason - The reason for requesting the OTP code.
   *
   * @returns {Promise<{ message: string }>} - Returns a Promise that resolves to an object containing a success message.
   *
   * @throws {UnauthorizedException} - If the user with the provided email address is not found.
   * @throws {Error} - If an error occurs during the OTP generation or email sending process.
   *
   * @example
   * const response = await userRepository.forgotPassword({ email: 'user@example.com' });
   * Logger.log(response.message);
   */
  async requestOTP({
    email,
    reason,
    language,
  }: {
    email: string;
    reason: OTP_REASON_ENUM;
    language: USER_SELECTED_LANGUAGE;
  }): Promise<{ message: string }> {
    const user = await this.userService.getUserFromDB({ where: { email } });

    if (!user) {
      throwHttpException(
        [
          language === USER_SELECTED_LANGUAGE.ENGLISH
            ? EnglishErrorMessages.USER_NOT_FOUND
            : FrenchErrorMessages.USER_NOT_FOUND,
        ],
        HttpStatusCode.NotFound,
        HttpStatus.NOT_FOUND,
      );
    }
    if (reason !== OTP_REASON_ENUM.FORGOT_PASSWORD) {
      throwHttpException(
        [
          language === USER_SELECTED_LANGUAGE.ENGLISH
            ? EnglishErrorMessages.INVALID_OTP_REASON
            : FrenchErrorMessages.INVALID_OTP_REASON,
        ],
        HttpStatusCode.BadRequest,
        HttpStatus.BAD_REQUEST,
      );
    }
    const code = await this.otpService.generateOTPCode({
      email,
      reason,
    });
    const mailOptions = {
      to: email,
      subject: "Go Limitless Otp Verification",
      html: forgotPasswordOtpTemplate(code),
    };

    await this.mailService.sendMail({ mailOptions: mailOptions });

    return {
      message:
        language === USER_SELECTED_LANGUAGE.ENGLISH
          ? "OTP sent to your email"
          : "OTP envoyé sur votre e-mail",
    };
  }

  // ======================================================= Verify OTP =======================================================
  /**
   * @description This method is used to register a new user by onboarding them and generating a JSON Web Token (JWT) for authentication.
   *
   * @param {Object} options - An object containing the necessary parameters for registering the user.
   * @param {string} options.email - The email address of the user.
   * @param {string} options.password - The password of the user.
   * @param {string} options.date_of_birth - The date of birth of the user.
   *
   * @returns {Promise<{ user: UserEntity; token: string; message: string }>} - Returns a Promise that resolves to an object containing the registered user entity, the generated JWT, and a success message.
   *
   * @throws {HttpException} - If the user is not found, already onboarded, or cannot be onboarded due to their current status.
   * @throws {Error} - If an error occurs during the onboarding or JWT generation process.
   *
   * @example
   * const response = await userRepository.register({
   *   email: 'user@example.com',
   *   password: 'password123',
   *   date_of_birth: '1990-01-01',
   * });
   * Logger.log(response.user, response.token, response.message);
   */

  async verifyOtp({
    email,
    otp,
    reason,
    language,
  }: {
    email: string;
    otp: number;
    reason: OTP_REASON_ENUM;
    language: USER_SELECTED_LANGUAGE;
  }): Promise<{ user: UserEntity; token: string; message: string }> {
    const user = await this.userService.getUserFromDB({ where: { email } });

    if (!user) {
      throwHttpException(
        [EnglishErrorMessages.USER_NOT_FOUND],
        HttpStatusCode.NotFound,
        HttpStatus.NOT_FOUND,
      );
    }

    const { statusCode } = await this.otpService.verifyOTPCode({
      otp,
      email,
      reason,
      language,
      // language: user.selected_language ?? USER_SELECTED_LANGUAGE.ENGLISH,
    });

    if (
      reason === OTP_REASON_ENUM.FORGOT_PASSWORD &&
      statusCode === HttpStatusCode.Ok
    ) {
      const token = this.jwtService.generateJWT({
        id: user.id,
        email: user.email,
      } as Partial<UserEntity> as UserEntity);

      return {
        user,
        token,
        message:
          language === USER_SELECTED_LANGUAGE.ENGLISH
            ? "OTP has been verified."
            : "L'OTP a été vérifié.",
      };
    }
  }

  // ======================================================= Reset Password =======================================================
  /**
   * @description This method is used to reset a user's password after verifying the provided OTP (One-Time Password) code.
   *
   * @param {Object} options - An object containing the necessary parameters for resetting the password.
   * @param {string} options.email - The email address of the user resetting their password.
   * @param {string} options.otp - The OTP code entered by the user.
   * @param {string} options.password - The new password chosen by the user.
   *
   * @returns {Promise<{ message: string }>} - Returns a Promise that resolves to an object containing a success message.
   *
   * @throws {UnauthorizedException} - If the user with the provided email address is not found.
   * @throws {HttpException} - If the provided OTP code is invalid or has expired.
   * @throws {Error} - If an error occurs during the password reset process.
   *
   * @example
   * const response = await userRepository.resetPassword({
   *   email: 'user@example.com',
   *   otp: '123456',
   *   password: 'newPassword123',
   * });
   * Logger.log(response.message);
   */
  async resetPassword({
    email,
    otp,
    password,
    language,
  }: {
    email: string;
    otp: number;
    password: string;
    language: USER_SELECTED_LANGUAGE;
  }): Promise<{ message: string }> {
    const user = await this.userService.getUserFromDB({ where: { email } });

    if (!user) {
      throwHttpException(
        [
          language === USER_SELECTED_LANGUAGE.FRENCH
            ? FrenchErrorMessages.USER_NOT_FOUND
            : EnglishErrorMessages.USER_NOT_FOUND,
        ],
        HttpStatusCode.NotFound,
        HttpStatus.NOT_FOUND,
      );
    }

    const isSamePassword = comparePassword(password, user.password);
    if (isSamePassword) {
      throwHttpException(
        [
          language === USER_SELECTED_LANGUAGE.FRENCH
            ? FrenchErrorMessages.INVALID_PASSWORD
            : EnglishErrorMessages.INVALID_PASSWORD,
        ],
        HttpStatusCode.BadRequest,
        HttpStatus.BAD_REQUEST,
      );
    }

    const { status } = await this.otpService.verifyOTPCode({
      email,
      otp,
      reason: OTP_REASON_ENUM.FORGOT_PASSWORD,
      language: language,
    });

    if (status !== HttpStatus.OK) {
      throwHttpException(
        [
          language === USER_SELECTED_LANGUAGE.FRENCH
            ? FrenchErrorMessages.CANNOT_RESET_PASSWORD_AT_THIS_MOMENT
            : EnglishErrorMessages.CANNOT_RESET_PASSWORD_AT_THIS_MOMENT,
        ],
        HttpStatusCode.BadRequest,
        HttpStatus.BAD_REQUEST,
      );
    }

    const hashedPassword = hashPassword(password);

    await this.userService.updateUser({
      where: { email },
      data: { password: hashedPassword },
    });

    return {
      message: getLocalizedMessage("PASSWORD_RESET", language),
    };
  }
}
