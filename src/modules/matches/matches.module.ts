import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Module({
  imports: [],
  providers: [MatchesService],
  controllers: [],
  exports: [MatchesService],
})
export class MatchesModule {}
