import { type JwtPayload } from 'jwt-decode';
export interface Environment {
  apiUrl: string;
  path: {
    users: string;
    loginUser: string;
  };
}

export interface CustomTokenPayload extends JwtPayload {
  email: string;
}
