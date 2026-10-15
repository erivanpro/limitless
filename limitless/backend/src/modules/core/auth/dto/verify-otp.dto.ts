// Nest JS
import { ApiProperty } from "@nestjs/swagger";

// Class-validator
import { IsEmail, IsEnum, IsNotEmpty, IsNumber } from "class-validator";
import { OTP_REASON_ENUM } from "src/modules/features/otp/enums/otp-reason.enum";
import { USER_SELECTED_LANGUAGE } from "src/modules/features/user/enums/user-onboarding-status.enum";

export class VerifyOtpDTO {
  @ApiProperty({
    description: "Email of the user",
    example: "usaid@zenkoders.com",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "OTP code",
  })
  @IsNotEmpty()
  @IsNumber({}, { message: "Invalid code" })
  otp: number;

  @ApiProperty({
    name: "reason",
    description: "Verification Type",
    example: "FORGOT_PASSWORD",
  })
  @IsNotEmpty()
  @IsEnum(OTP_REASON_ENUM)
  reason: OTP_REASON_ENUM;
  @ApiProperty({
    name: "language",
    description: "User selected language",
    example: [USER_SELECTED_LANGUAGE.ENGLISH, USER_SELECTED_LANGUAGE.FRENCH],
    enum: USER_SELECTED_LANGUAGE,
  })
  @IsEnum(USER_SELECTED_LANGUAGE)
  language: USER_SELECTED_LANGUAGE;
}
