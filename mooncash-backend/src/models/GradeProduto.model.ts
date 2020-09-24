import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "./Produto.model";

@Entity()
export class GradeProduto {

  @PrimaryGeneratedColumn()
  idGradeProduto: number;

  @Column({
    nullable: false
  })
  nome: string;

  @Column({
    nullable: false,
    default: 0,
    type: 'double'
  })
  quantidade: number;

  @ManyToOne(() => Produto, produto => produto.grade, {
    onDelete: 'CASCADE'
  })
  produto: Produto;
}