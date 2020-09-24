import { BadRequestException, Body, Controller, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { EmpresaService } from 'src/modules/empresa/service/empresa.service';
import { ProdutoDto } from '../dto/produto.dto';
import { ProdutoService } from '../service/produto.service';

@UseGuards(JwtAuthGuard)
@Controller('produto')
export class ProdutoController {

  constructor(
    private empresaService: EmpresaService,
    private produtoService: ProdutoService
  ) {}

  @Post()
  async criarProduto(@Body() produtoDto: ProdutoDto, @Req() req: any) {
    try {
      console.log(req);
      const empresa = await this.empresaService.getLoggedEmpresa(req);
      return this.produtoService.criarProduto(produtoDto, empresa);
    } catch(err) {
      throw new BadRequestException("Erro ao add produto:" + err);
    }
  }
  
  @Put(':id')
  atualizarProduto(@Body() produtoDto: ProdutoDto, @Param('id') idProduto: number) {
    try {
      return this.produtoService.atualizarProduto(produtoDto, idProduto);
    } catch(err) {
      throw new BadRequestException("Erro ao add produto:" + err);
    }
  }
}
