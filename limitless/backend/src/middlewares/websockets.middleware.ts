import { Injectable, NestMiddleware } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ConfigService } from "@nestjs/config";
import { Socket } from "socket.io";
import { WsJwtGuard } from "src/modules/core/auth/guards/ws.guard";

@Injectable()
export class SocketAuthMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async use(client: Socket, next: (err?: Error) => void): Promise<void> {
    try {
      // Create an instance of WsJwtGuard using the injected services
      const wsJwtGuard = new WsJwtGuard(this.jwtService, this.configService);

      // Validate the token
      const payload = await wsJwtGuard.validateToken(client);
      client.data.userId = payload?.id;

      next();
    } catch (err) {
      next(err);
    }
  }
}
