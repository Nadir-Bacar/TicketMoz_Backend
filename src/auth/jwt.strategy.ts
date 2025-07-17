import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET, // Deve ser o mesmo segredo usado para assinar o JWT
    });
  }

  async validate(payload: any) {
    // Aqui você pode adicionar lógica para validar o usuário no banco de dados, caso precise
    return { userId: payload.sub, email: payload.email };
  }
}
