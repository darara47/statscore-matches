import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MatchResponse } from './types/match';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): MatchResponse[] {
    return this.appService.get();
  }
}
