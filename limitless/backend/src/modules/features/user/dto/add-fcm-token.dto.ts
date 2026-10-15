import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsOptional, IsString } from "class-validator";
import { USER_SELECTED_LANGUAGE } from "../enums/user-onboarding-status.enum";

export class AddFcmTokenDto {
  @ApiProperty({ name: "fcmToken" })
  @IsOptional()
  @IsString({ message: "Invalid String" })
  fcmToken: string;
}
export class SetUserLanguageDto {
  @ApiProperty({
    name: "langauge",
    enum: USER_SELECTED_LANGUAGE,
    example: [USER_SELECTED_LANGUAGE.ENGLISH, USER_SELECTED_LANGUAGE.FRENCH],
  })
  @IsEnum(USER_SELECTED_LANGUAGE)
  language: USER_SELECTED_LANGUAGE;
}
