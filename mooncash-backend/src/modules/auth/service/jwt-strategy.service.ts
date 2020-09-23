import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy){

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret_key', //TODO mudar
    });
  }

  async validate(payload: any) {
    console.log(payload); //TODO fazer uma requisição para retornar algo mais completo
    return { idUsuario: payload.sub, username: payload.username };
  }
}
