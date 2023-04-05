import { MatchMock, Sports } from '../../types/match';

export const matches: MatchMock[] = [
  {
    sport: 'soccer' as Sports,
    participant1: 'Chelsea',
    participant2: 'Arsenal',
    score: '2:1',
  },
  {
    sport: 'volleyball' as Sports,
    participant1: 'Germany',
    participant2: 'France',
    score: '3:0,25:23,25:19,25:21',
  },
  {
    sport: 'handball' as Sports,
    participant1: 'Pogoń Szczeciń',
    participant2: 'Azoty Puławy',
    score: '34:26',
  },
  {
    sport: 'basketball' as Sports,
    participant1: 'GKS Tychy',
    participant2: 'GKS Katowice',
    score: [
      ['9:7', '2:1'],
      ['5:3', '9:9'],
    ],
  },
  {
    sport: 'tennis' as Sports,
    participant1: 'Maria Sharapova',
    participant2: 'Serena Williams',
    score: '2:1,7:6,6:3,6:7',
  },
  {
    sport: 'ski jumping' as Sports,
  },
];
