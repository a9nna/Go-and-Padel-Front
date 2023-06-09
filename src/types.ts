export interface Environment {
  apiUrl: string;
  path: {
    users: string;
    loginUser: string;
    remove: string;
    matches: string;
    create: string;
  };
  images: string;
}

export type Store = Record<string, string>;
