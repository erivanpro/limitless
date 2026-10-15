import { ConfigService } from "@nestjs/config";
import { config } from "dotenv";
import { DataSource } from "typeorm";
import * as fs from "fs";
import { join } from "path";

config({
  path: [".env"],
});

const configService = new ConfigService();

export default new DataSource({
  type: "postgres",
  host: configService.getOrThrow("POSTGRES_HOST"),
  port: configService.getOrThrow("POSTGRES_PORT"),
  username: configService.getOrThrow("POSTGRES_USER"),
  password: configService.getOrThrow("POSTGRES_PASSWORD"),
  database: configService.getOrThrow("POSTGRES_DATABASE"),
  ssl: {
    rejectUnauthorized: true, // Enforces verification of the server's SSL certificate
    ca: fs
      .readFileSync(
        join(process.cwd(), "src/modules", "database", "eu-west-3-bundle.pem")
      )
      .toString(),
  },
  migrations: ["migrations/**"],
  entities: ["dist/**/*.entity.js"],
});
