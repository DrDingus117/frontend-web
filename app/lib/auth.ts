export type User = { name: string; email: string };

export type AuthResult =
  | { ok: true; user: User }
  | { ok: false; error: string };

const NOT_CONNECTED = "Accounts aren't connected yet.";

// TODO: replace each function body with a call to your backend,
// for example fetch("/api/auth/signup", { method: "POST", ... }).

export async function signUp(
  name: string,
  email: string,
  password: string
): Promise<AuthResult> {
  return { ok: false, error: NOT_CONNECTED };
}

export async function logIn(
  email: string,
  password: string
): Promise<AuthResult> {
  return { ok: false, error: NOT_CONNECTED };
}

export async function logOut(): Promise<void> {
  // TODO: end the session on the server
}

// Called when the page loads, to restore a signed-in user.
export async function getCurrentUser(): Promise<User | null> {
  return null;
}