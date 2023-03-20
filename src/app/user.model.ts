export interface User {
  token: string;
  email: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface UserCredentials {
  email: string;
  password: string;
}
