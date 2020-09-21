import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/models/Usuario.model';
import { UsuarioService } from 'src/modules/usuario/service/usuario.service';

@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService
  ) {

  }

  async validarUsuario(login: string, senha: string) {
    const usuario = await this.usuarioService.findByLogin(login);
    if (usuario && senha === usuario.senha) {
      return usuario;
    }
    return null;
  }

  async login(user: Usuario) {
    const payload = { username: user.login, sub: user.idUsuario };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
