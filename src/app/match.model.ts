export interface MatchData {
  creator: string,
  date: Date;
  level: string;
  category: string;
  allowedPlayersNumber: number;
  signedPlayersNumber: number;
  paddleCourt: number;
  image: string;
}

export interface Match extends MatchData {
  id: string;
}

