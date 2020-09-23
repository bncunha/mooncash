import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from 'src/models/Empresa.model';
import { EmpresaController } from './controller/empresa.controller';
import { EmpresaService } from './service/empresa.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  controllers: [EmpresaController],
  providers: [EmpresaService],
  exports: [TypeOrmModule, EmpresaService]
})
export class EmpresaModule {}
