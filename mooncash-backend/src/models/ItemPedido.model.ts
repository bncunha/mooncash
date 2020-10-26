import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "./Pedido.model";
import { Produto } from "./Produto.model";

@Entity()
export class ItemPedido {
  @PrimaryGeneratedColumn()
  idItemPedido: number;

  @Column()
  descricao: string;

  @Column({
    type: 'double'
  })
  quantidade: number;

  @Column({type: 'double'})
  valorUnitario: number;

  @Column({type: 'double'})
  valorTotal: number;

  @ManyToOne(() => Produto, produto => produto.itensPedido)
  produto: Produto;

  @ManyToOne(() => Pedido, pedido => pedido.itensPedido, {
    onDelete: 'CASCADE'
  })
  pedido: Pedido;
}