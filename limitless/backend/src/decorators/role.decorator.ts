import { CustomDecorator, SetMetadata } from "@nestjs/common";
import { USER_TYPE_ENUM } from "src/modules/features/user/enums/user-role.enum";
export const ROLES_KEY = "roles";
export const Roles = (...roles: USER_TYPE_ENUM[]): CustomDecorator<string> =>
  SetMetadata(ROLES_KEY, roles);
