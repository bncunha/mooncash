import { Test, TestingModule } from '@nestjs/testing';
import { EmpresaService } from './empresa.service';

describe('EmpresaService', () => {
  let provider: EmpresaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmpresaService],
    }).compile();

    provider = module.get<EmpresaService>(EmpresaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
