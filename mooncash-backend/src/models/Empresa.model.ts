import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Cliente } from "./Cliente.model";
import { Usuario } from "./Usuario.model";

@Entity()
export class Empresa {

  @PrimaryGeneratedColumn()
  idEmpresa: number;

  @Column({
    nullable: false
  })
  nome: string;

  @Column()
  cnpj: string;

  @OneToMany(() => Cliente, cliente => cliente.empresa)
  clientes: Cliente[];

  @OneToOne(() => Usuario)
  @JoinColumn()
  usuario: Usuario;
}