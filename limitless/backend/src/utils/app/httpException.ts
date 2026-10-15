import { HttpException, HttpStatus } from "@nestjs/common";
import { HttpStatusCode } from "axios";
import {
  EnglishErrorMessages,
  FrenchErrorMessages,
} from "src/types/enums/user/error-messages.enum";

export const throwHttpException = (
  messages: EnglishErrorMessages[] | FrenchErrorMessages[] | string[],
  status: HttpStatusCode,
  errorType: HttpStatus
): void => {
  const response = {
    message: messages,

    error: errorType,

    statusCode: status,
  };

  throw new HttpException({ ...response }, status);
};
