import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column({nullable: false})
  login: string;

  @Column({nullable: false})
  senha: string;

  @Column({nullable: false})
  dataCadastro: Date;

  @Column({nullable: true})
  dataUltimoAcesso: Date;
}