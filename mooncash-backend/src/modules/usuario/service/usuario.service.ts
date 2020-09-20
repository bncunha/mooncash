import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from 'src/models/Usuario.model';
import { Repository } from 'typeorm';
import { UsuarioDto } from '../dto/usuario.dto';

@Injectable()
export class UsuarioService {

  constructor(@InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>) {

  }

  async criarUsuario(usuarioDto: UsuarioDto) {
    if (!usuarioDto.senha) {
      throw 'É obrigatório senha ao criar usuário.';
    }
    const usuario = new Usuario();
    Object.assign(usuario, usuarioDto);
    usuario.dataCadastro = new Date();
    return this.usuarioRepository.save(usuario);
  }

  async atualizarUsuario(usuarioDto: UsuarioDto, idUsuario: number) {
    if (usuarioDto.senha != undefined) {
      throw 'Não é possível alterar senha ao atualizar usuário, para isso utilize a função resetar senha';
    }
    const usuario = await this.usuarioRepository.findOneOrFail(idUsuario);
    Object.assign(usuario, usuarioDto);
    return this.usuarioRepository.save(usuario);
  }

}
