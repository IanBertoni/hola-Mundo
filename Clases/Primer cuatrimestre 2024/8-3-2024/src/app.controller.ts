import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { iSongs } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/songs')
  getHello(): iSongs[] {
    return this.appService.getSongs();
  }
}
