import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategyService extends PassportStrategy(Strategy) {

  constructor(private authService: AuthService) {
    super({
      usernameField: 'login',
      passwordField: 'senha'
    });
  }

  async validate(username: string, password:string): Promise<any> {
    const usuario = await this.authService.validarUsuario(username, password);
    if (!usuario) {
      throw new UnauthorizedException();
    }
    return usuario;
  }
}
