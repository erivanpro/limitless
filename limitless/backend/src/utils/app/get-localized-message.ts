import { USER_SELECTED_LANGUAGE } from "src/modules/features/user/enums/user-onboarding-status.enum";
import {
  EnglishSuccessMessages,
  FrenchSuccessMessages,
} from "src/types/enums/user/success-messages.enum";

export function getLocalizedMessage(
  key: keyof typeof EnglishSuccessMessages,
  language: USER_SELECTED_LANGUAGE
): string {
  return language === USER_SELECTED_LANGUAGE.ENGLISH
    ? EnglishSuccessMessages[key]
    : FrenchSuccessMessages[key];
}
