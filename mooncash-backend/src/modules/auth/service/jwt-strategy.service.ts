import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { EmpresaService } from 'src/modules/empresa/service/empresa.service';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy){

  constructor(private empresaService: EmpresaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret_key', //TODO mudar
    });
  }

  async validate(payload: any) {
    console.log(payload); //TODO fazer uma requisição para retornar algo mais completo
    const empresa = await this.empresaService.findEmpresaByIdUsuario(payload.sub);
    return { idUsuario: payload.sub, username: payload.username, empresa: empresa.idEmpresa };
  }
}
