import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  getHello(): { title: string } {
    return { title: 'Cafe Small House' };
  }

  @Get('/login')
  @Render('login')
  getLoginRender(): { title: string } {
    return { title: 'Login' };
  }
  //
}
