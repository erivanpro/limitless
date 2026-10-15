// Nest Js Imports
import { Logger, ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
// import { ConfigModule } from "@nestjs/config";
import * as express from "express";
// Module Imports
import { AppModule } from "./app.module";

// Request IP Import
import * as requestIp from "request-ip";
import { useSwagger } from "./config/swagger.config";

async function bootstrap(): Promise<void> {
  // Raw Body is used to get the raw body of the request, which is useful for parsing the request body.
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
    bodyParser: true,
  });

  // TODO: Update this to only allow the front-end URL
  app.enableCors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      // transformOptions: {
      //   enableImplicitConversion: true,
      // },
    })
  );
  useSwagger(app);

  Logger.log("App is bootstrapping...", "Bootstrap");

  app.use(requestIp.mw());
  const port = process.env.PORT || 8000;

  await app.listen(port);

  Logger.log(`🚀 Server is up and running on port ${port}`, "Bootstrap");
}

bootstrap();
