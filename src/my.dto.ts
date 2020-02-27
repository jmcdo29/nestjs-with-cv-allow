import { Allow } from 'class-validator';

export class MyDTO {
  @Allow()
  test: object;
}