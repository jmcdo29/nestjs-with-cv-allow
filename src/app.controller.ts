import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { MyDTO } from './my.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  testPost(@Body() body: MyDTO) {
    return { valid: true, body };
  }
}
