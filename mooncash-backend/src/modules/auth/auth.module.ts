import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { EmpresaModule } from '../empresa/empresa.module';
import { UsuarioModule } from '../usuario/usuario.module';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { JwtStrategyService } from './service/jwt-strategy.service';
import { LocalStrategyService } from './service/local-strategy.service';

@Module({
  imports: [
    UsuarioModule,
    EmpresaModule,
    PassportModule,
    JwtModule.register({
      secret: 'secret_key', // TODO criar uma top
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategyService, JwtStrategyService],
  exports: [AuthService]
})
export class AuthModule {}
