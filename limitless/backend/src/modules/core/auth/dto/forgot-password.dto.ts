// Nest JS
import { ApiProperty } from "@nestjs/swagger";

// Class-validator
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";
import { PasswordMatch } from "src/decorators/password-match.decorator";
import { USER_SELECTED_LANGUAGE } from "src/modules/features/user/enums/user-onboarding-status.enum";

export class ForgotPasswordDTO {
  @ApiProperty({
    description: "Email of the user",
    example: "usaid@zenkoders.com",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "OTP code",
    example: 1234,
  })
  @IsNotEmpty()
  @IsNumber()
  otp: number;
  @ApiProperty({
    description: "New Password of the user",
    example: "newPassword1!",
  })
  @IsNotEmpty({ message: "Password should not be empty." })
  @IsString({ message: "Password must be a string." })
  @MinLength(8)
  @MaxLength(20)
  @Matches(/[a-z]/, {
    message: "Password must contain at least one lowercase letter.",
  })
  @Matches(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter.",
  })
  @Matches(/\d/, { message: "Password must contain at least one number." })
  @Matches(/[@$!%*?&#+,"./:;()_=\-`{}|<>~^]/, {
    message: "Password must contain at least one special character.",
  })
  password: string;

  @ApiProperty({
    description: "Confirm new Password of the user",
    example: "Password1!",
  })
  @IsNotEmpty({ message: "Confirm Password should not be empty." })
  @IsString({ message: "Confirm Password must be a string." })
  @PasswordMatch("password", { message: "Passwords does not match." })
  confirmPassword: string;
  @ApiProperty({
    name: "language",
    description: "User selected language",
    example: [USER_SELECTED_LANGUAGE.ENGLISH, USER_SELECTED_LANGUAGE.FRENCH],
    enum: USER_SELECTED_LANGUAGE,
  })
  @IsEnum(USER_SELECTED_LANGUAGE)
  language: USER_SELECTED_LANGUAGE;
}
