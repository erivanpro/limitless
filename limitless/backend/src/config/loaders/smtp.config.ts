import { registerAs } from "@nestjs/config";

const parseNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);

  return Number.isFinite(parsed) ? parsed : fallback;
};

const parseBoolean = (
  value: string | undefined,
  fallback: boolean
): boolean => {
  if (typeof value !== "string") return fallback;

  return value.toLowerCase() === "true";
};

export default registerAs("smtp", () => ({
  host: process.env.SMTP_HOST ?? "smtp.gmail.com",
  port: parseNumber(process.env.SMTP_PORT, 587),
  secure: parseBoolean(process.env.SMTP_SECURE, false),
  connectionTimeout: parseNumber(process.env.SMTP_CONNECTION_TIMEOUT, 20000),
  email: process.env.SMTP_EMAIL,
  password: process.env.SMTP_PASSWORD,
}));
