// Generates a random 10-digit Account ID.
// Uniqueness must be enforced by checking against the DB before saving.
export function generateAccountId(): string {
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += Math.floor(Math.random() * 10).toString();
  }
  return id;
}
