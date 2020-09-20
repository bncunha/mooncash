import { IsNotEmpty, IsOptional, MaxLength } from "class-validator";

export class UsuarioDto {

  @IsNotEmpty()
  @MaxLength(35)
  login: string;
  
  @IsOptional()
  @MaxLength(50)
  senha: string;
}