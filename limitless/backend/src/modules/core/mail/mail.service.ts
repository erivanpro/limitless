// Nest JS
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

// node mailer
import * as nodemailer from "nodemailer";

// Types
import { MailOptions } from "./types";

@Injectable()
export class MailService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    const host = this.configService.get<string>("smtp.host", "smtp.gmail.com");
    const port = this.configService.get<number>("smtp.port", 587);
    const secure = this.configService.get<boolean>("smtp.secure", false);
    const email = this.configService.getOrThrow<string>("smtp.email");
    const password = this.configService.getOrThrow<string>("smtp.password");
    const connectionTimeout = this.configService.get<number>(
      "smtp.connectionTimeout",
      20000
    );

    this.transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user: email,
        pass: password,
      },
      connectionTimeout,
      greetingTimeout: connectionTimeout,
      socketTimeout: connectionTimeout,
    });
  }

  async sendMail({ mailOptions }: { mailOptions: MailOptions }): Promise<void> {
    const fromEmail = this.configService.get<string>("smtp.email");
    if (!mailOptions.from && fromEmail) mailOptions.from = fromEmail;

    await this.transporter.sendMail(mailOptions);
  }
}
