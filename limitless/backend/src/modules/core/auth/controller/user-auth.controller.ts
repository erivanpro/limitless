// Nest JS
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";

// Services
import { AuthService } from "../service/user-auth.service";

// Response and DTO
import { UserLogin } from "../response";
import { LoginDTO } from "../dto/login.dto";
import { ForgotPasswordDTO } from "../dto/forgot-password.dto";
import { RequestOTPDTO } from "../dto/request-otp.dto";

// Entities
import { UserEntity } from "src/modules/features/user/entities/user.entity";

// Utils
import { errorSchema } from "src/utils/app/error-schema";
import { VerifyOtpDTO } from "../dto/verify-otp.dto";

@Controller("auth")
@ApiTags("Auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // ========================================== Login ==========================================
  @ApiOperation({ summary: "Login a user" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "User has been successfully logged in.",
    type: UserLogin,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Validation failed.",
    schema: errorSchema(HttpStatus.BAD_REQUEST),
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Invalid OTP.",
    schema: errorSchema(HttpStatus.UNAUTHORIZED),
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User not found.",
    schema: errorSchema(HttpStatus.NOT_FOUND),
  })
  @ApiBody({ type: LoginDTO })
  @Post("/login")
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  async login(
    @Body() { email, password, language }: LoginDTO,
  ): Promise<{ user: UserEntity; token: string }> {
    return await this.authService.login({ email, password, language });
  }

  // ========================================== Request OTP for Forgot Password==========================================
  @ApiOperation({
    summary: "Request OTP for forgot password",
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "OTP has been sent to your email.",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Validation failed.",
    schema: errorSchema(HttpStatus.BAD_REQUEST),
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Invalid OTP.",
    schema: errorSchema(HttpStatus.UNAUTHORIZED),
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User not found.",
    schema: errorSchema(HttpStatus.NOT_FOUND),
  })
  @ApiBody({ type: RequestOTPDTO })
  @Post("/request-otp")
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  async requestOTP(
    @Body() { email, reason, language }: RequestOTPDTO,
  ): Promise<{ message: string }> {
    return await this.authService.requestOTP({
      email,
      reason,
      language,
    });
  }
  // ========================================== Verify OTP code ==========================================

  @ApiOperation({ summary: "Verify OTP code" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "OTP has been verified.",
  })
  @ApiBody({ type: VerifyOtpDTO })
  @Post("/verify-otp")
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  async verifyOtp(
    @Body() { email, otp, reason, language }: VerifyOtpDTO,
  ): Promise<{ user: UserEntity; token: string; message: string }> {
    return await this.authService.verifyOtp({
      email,
      otp,
      reason,
      language,
    });
  }

  // ========================================== Reset Password ==========================================

  @ApiOperation({ summary: "Reset password" })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Password has been successfully reset.",
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Validation failed.",
    schema: errorSchema(HttpStatus.BAD_REQUEST),
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: "Invalid OTP.",
    schema: errorSchema(HttpStatus.UNAUTHORIZED),
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: "User not found.",
    schema: errorSchema(HttpStatus.NOT_FOUND),
  })
  @ApiBody({ type: ForgotPasswordDTO })
  @Post("/reset-password")
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  async resetPassword(
    @Body() { email, password, otp, language }: ForgotPasswordDTO,
  ): Promise<{ message: string }> {
    return await this.authService.resetPassword({
      email,
      otp,
      password,
      language,
    });
  }
}
