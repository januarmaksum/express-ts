export type UserRole = 'ADMINISTRATOR' | 'AUTHOR';

export interface User {
  id: string;
  userLogin: string;
  userPass: string;
  userNicename: string;
  userEmail: string;
  userStatus: number;
  displayName: string;
  userRegistered: Date;
  updatedAt: Date;
  role: UserRole;
}
