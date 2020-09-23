import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { ProdutoDto } from '../dto/produto.dto';
import { ProdutoService } from '../service/produto.service';

@Controller('produto')
export class ProdutoController {

  constructor(private produtoService: ProdutoService) {}

  @Post()
  criarProduto(@Body() produtoDto: ProdutoDto) {
    try {
      return this.produtoService.criarProduto(produtoDto);
    } catch(err) {
      throw new BadRequestException("Erro ao add produto:" + err);
    }
  }
}
