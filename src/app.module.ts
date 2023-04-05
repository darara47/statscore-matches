import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchesModule } from './modules/matches/matches.module';

@Module({
  imports: [MatchesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
