export type MatchMock = {
  sport: Sports;
  participant1?: string;
  participant2?: string;
  score?: string | string[][];
};

export type MatchResponse = {
  name: string;
  score: string;
};

export enum Sports {
  soccer = 'soccer',
  volleyball = 'volleyball',
  handball = 'handball',
  basketball = 'basketball',
  tennis = 'tennis',
  skiJumping = 'ski jumping',
}
