export interface AuthenticatedUser {
  id: string;
  email: string;
  accountId: string | null;
}
