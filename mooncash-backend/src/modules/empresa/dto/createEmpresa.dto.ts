import { IsNotEmpty, MaxLength, IsOptional, Length, ValidateNested } from 'class-validator';
import { UsuarioDto } from 'src/modules/usuario/dto/usuario.dto';

export class CriarAtualizarEmpresaDto {
  idEmpresa: number;

  @IsNotEmpty()
  @MaxLength(50)
  nome: string;

  @IsOptional()
  @Length(14, 14)
  cnpj: string;

  @IsOptional()
  @ValidateNested()
  usuario: UsuarioDto;
}