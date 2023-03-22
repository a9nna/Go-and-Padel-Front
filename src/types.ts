export interface Environment {
  apiUrl: string;
  path: {
    users: string;
    loginUser: string;
    remove: string;
    matches: string;
    create: string;
  };
}

export type Store = Record<string, string>;

export interface ErrorDetails {
  code: string,
  message: string
}
