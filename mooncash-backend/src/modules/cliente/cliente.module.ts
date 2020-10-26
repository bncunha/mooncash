import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/models/Cliente.model';
import { EmpresaModule } from '../empresa/empresa.module';
import { ClienteController } from './controller/cliente.controller';
import { ClienteService } from './service/cliente.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), EmpresaModule],
  controllers: [ClienteController],
  providers: [ClienteService],
  exports: [TypeOrmModule]
})
export class ClienteModule {}
