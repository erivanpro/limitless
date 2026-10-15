import { Module, OnModuleInit } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtAdminService } from "src/modules/core/jwt/services/jwt-admin.service";
import { AdminRepository } from "./repositories/admin.repository";
import { AdminEntity } from "./entities/admin.entity";
import { JwtService } from "@nestjs/jwt";
import { UserModule } from "../user/user.module";
import { NotificationModule } from "../notification/notification.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([AdminEntity]),
    UserModule,
    NotificationModule,
  ],

  providers: [AdminService, AdminRepository, JwtAdminService, JwtService],
  controllers: [AdminController],
})
export class AdminModule {}
