import { Injectable } from '@nestjs/common';
import { MatchesService } from './modules/matches/matches.service';
import { MatchResponse } from './types/match';

@Injectable()
export class AppService {
  constructor(private readonly matchesService: MatchesService) {}

  get(): MatchResponse[] {
    return this.matchesService.get();
  }
}
