import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produto } from 'src/models/Produto.model';
import { ProdutoController } from './controller/produto.controller';
import { ProdutoService } from './service/produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([Produto])],
  controllers: [ProdutoController],
  providers: [ProdutoService]
})
export class ProdutoModule {}
