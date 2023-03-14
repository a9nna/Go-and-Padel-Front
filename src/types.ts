export interface Environment {
  apiUrl: string;
  path: {
    users: string;
    loginUser: string;
  };
}

export type Store = Record<string, string>;

