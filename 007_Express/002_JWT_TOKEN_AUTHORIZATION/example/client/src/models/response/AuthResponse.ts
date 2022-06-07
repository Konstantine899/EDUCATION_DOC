//models AuthResponse.ts

import { IUser } from '../IUser';

export interface AuthResponse {
  accessToken: string;
  status: number;
  refreshToken: string;
  user: IUser;
}
