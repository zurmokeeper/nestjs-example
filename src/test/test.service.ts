import { Injectable } from '@nestjs/common';

@Injectable()
export class TestService {

  test(): string {
    return 'test test test!';
  }

  findOneTest(): string {
    return 'findOneTest!';
  }
}