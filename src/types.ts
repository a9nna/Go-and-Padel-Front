export interface Environment {
  apiUrl: string;
  path: {
    users: string;
    loginUser: string;
    matches: string;
  };
}

export type Store = Record<string, string>;
