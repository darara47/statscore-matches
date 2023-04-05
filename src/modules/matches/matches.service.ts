import { Injectable } from '@nestjs/common';
import { MatchResponse } from '../../types/match';

@Injectable()
export class MatchesService {
  get(): MatchResponse[] {
    return [{ name: '', score: '' }];
  }
}
