import { BadRequestException, Body, Controller, Param, Post, Put } from '@nestjs/common';
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
     throw new BadRequestException('Erro ao criar usuario:' + err);
    }
  }
  
  @Put(':id')
  atualizarUsuario(@Body() usuarioDto: UsuarioDto, @Param('id') idUsuario: number) {
    try {
      return this.usuarioService.atualizarUsuario(usuarioDto, idUsuario);
    } catch (err) {
     throw new BadRequestException('Erro ao atualizar usuario:' + err);
    }    
  }
}
