import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { models } from './models/models';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { UsuarioModule } from './modules/usuario/usuario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'mooncash',
      entities: models,
      synchronize: true,
    }),
    EmpresaModule,
    ClienteModule,
    UsuarioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
