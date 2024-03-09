export interface IUser {
  id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  createdTimestamp: number;
  enabled: boolean;
}
