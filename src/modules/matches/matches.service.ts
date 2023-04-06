import { Injectable } from '@nestjs/common';
import { MatchMock, MatchResponse, Sports } from '../../types/match';
import { matches as matchesMock } from './matches.mock';

@Injectable()
export class MatchesService {
  get(): MatchResponse[] {
    const matches = matchesMock;
    const formattedMatches = matches.map((match) => this.format(match));
    const filteredMatches = this.filter(formattedMatches);

    console.log(filteredMatches);

    return filteredMatches;
  }

  private format(match: MatchMock): MatchResponse {
    const name = this.formatName(match);
    const score = this.formatScore(match);

    return {
      name,
      score,
    };
  }

  private formatName(match: MatchMock): string {
    const { participant1, participant2, sport } = match;

    if (!participant1 || !participant2) {
      return null;
    }

    switch (sport) {
      case Sports.basketball:
      case Sports.soccer:
      case Sports.volleyball:
        return `${participant1} - ${participant2}`;

      case Sports.handball:
      case Sports.tennis:
        return `${participant1} vs ${participant2}`;
    }

    return null;
  }

  private formatScore(match: MatchMock): string {
    const { score, sport } = match;

    if (!score) {
      return null;
    }

    switch (sport) {
      case Sports.handball:
      case Sports.soccer:
        if (typeof score !== 'string') {
          break;
        }
        return score;

      case Sports.basketball:
        if (!score || !Array.isArray(score)) {
          break;
        }
        return score.flat().join(',');

      case Sports.tennis:
      case Sports.volleyball:
        if (!score || typeof score !== 'string') {
          break;
        }
        const [mainScore, ...setScores] = score.split(',');
        const setScoresText = setScores
          .map((score, index) => `set${index + 1} ${score}`)
          .join(', ');

        return `Main score: ${mainScore}${
          setScoresText ? ` (${setScoresText})` : ''
        }`;
    }

    return null;
  }

  private filter(matches: MatchResponse[]): MatchResponse[] {
    return matches.filter((match) => !!match.name && !!match.score);
  }
}
