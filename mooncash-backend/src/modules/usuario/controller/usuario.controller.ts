import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { DefaultResponse } from 'src/core/DefaultResponse';
import { UsuarioDto } from '../dto/usuario.dto';
import { UsuarioService } from '../service/usuario.service';

@Controller('usuario')
export class UsuarioController {

  constructor(private usuarioService: UsuarioService) {

  }

  @Post()
  criarUsuario(@Body() usuarioDto: UsuarioDto) {
    try {
      return this.usuarioService.criarUsuario(usuarioDto);
    } catch (err) {
      return new DefaultResponse('Erro ao criar usuario:' + err).error();
    }
  }
  
  @Put(':id')
  atualizarUsuario(@Body() usuarioDto: UsuarioDto, @Param('id') idUsuario: number) {
    try {
      return this.usuarioService.atualizarUsuario(usuarioDto, idUsuario);
    } catch (err) {
      return new DefaultResponse('Erro ao atualizar usuario:' + err).error();
    }    
  }
}
