import { StatusPedido } from "src/enums/StatusPedido.enum";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./Cliente.model";
import { ItemPedido } from "./ItemPedido.model";

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  idPedido: number;

  @Column()
  dataInicio: Date;

  @Column({nullable: true})
  dataFim: Date;

  @Column()
  dataPrevista: Date;

  @Column({
    type: 'enum',
    enum: StatusPedido
  })
  status: StatusPedido;

  @Column({nullable: true})
  motivoCancelamento: string;

  @Column({type: 'double'})
  valorTotal: number;

  @Column({type: 'double'})
  valorDesconto: number;

  @Column({type: 'double'})
  valorEntrada: number;

  @ManyToOne(() => Cliente, cliente => cliente.pedidos)
  cliente: Cliente;

  @OneToMany(() => ItemPedido, itemP => itemP.pedido, {
    cascade: true
  })
  itensPedido: ItemPedido[];
}