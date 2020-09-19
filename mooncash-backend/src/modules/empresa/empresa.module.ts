import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empresa } from 'src/models/Empresa.model';
import { EmpresaController } from './controller/empresa.controller';
import { EmpresaService } from './service/empresa.service';

@Module({
  imports: [TypeOrmModule.forFeature([Empresa])],
  controllers: [EmpresaController],
  providers: [EmpresaService],
  exports: [TypeOrmModule]
})
export class EmpresaModule {}
