// Nest JS
import { ApiProperty } from "@nestjs/swagger";

// Class-validator
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { USER_SELECTED_LANGUAGE } from "src/modules/features/user/enums/user-onboarding-status.enum";

export class LoginDTO {
  @ApiProperty({
    description: "Email of the user",
    example: "usaid@zenkoders.com",
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: "Password of the user",
    example: "Password1!",
  })
  @IsNotEmpty()
  @IsString()
  password: string;
  @ApiProperty({
    name: "language",
    description: "User selected language",
    example: [USER_SELECTED_LANGUAGE.ENGLISH, USER_SELECTED_LANGUAGE.FRENCH],
    enum: USER_SELECTED_LANGUAGE,
  })
  @IsEnum(USER_SELECTED_LANGUAGE)
  language: USER_SELECTED_LANGUAGE;
}
