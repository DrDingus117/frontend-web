"use client";

import { useEffect, useState } from "react";
import { getCurrentUser, logIn, logOut, signUp, type User } from "../lib/auth";

const tabClass =
  "flex-1 px-4 py-2.5 font-bold bg-gray-700 text-gray-100 aria-pressed:bg-indigo-500 aria-pressed:text-white focus:outline-none focus:ring-2 focus:ring-sky-300";
const labelClass = "block mb-1.5 text-sm font-bold text-gray-100";
const inputClass =
  "w-full bg-gray-900 border border-gray-600 text-gray-100 px-4 py-3 hover:border-gray-500 focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-300/40";

export default function AccountForm() {
  const [mode, setMode] = useState<"signup" | "login">("signup");
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [busy, setBusy] = useState(false);

  const isSignup = mode === "signup";

  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);

  function switchMode(next: "signup" | "login") {
    setMode(next);
    setMessage("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setMessage("");

    const result = isSignup
      ? await signUp(name, email, password)
      : await logIn(email, password);

    setBusy(false);

    if (result.ok) {
      setUser(result.user);
      setPassword("");
    } else {
      setIsError(true);
      setMessage(result.error);
    }
  }

  async function handleLogout() {
    await logOut();
    setUser(null);
  }

  return (
    <main className="max-w-md mx-auto p-6 space-y-6">
      <h1 className="text-4xl font-bold text-gray-50">
        {isSignup ? "Sign Up" : "Log In"}
      </h1>

      {user ? (
        <section className="space-y-4 bg-gray-800/60 border-2 border-gray-700 p-6">
          <p>
            Signed in as <strong className="text-gray-50">{user.name}</strong>
          </p>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-300"
          >
            Log Out
          </button>
        </section>
      ) : (
        <section className="space-y-4">
          <div className="flex" role="group" aria-label="Choose sign up or log in">
            <button type="button" aria-pressed={isSignup} onClick={() => switchMode("signup")} className={tabClass}>
              Sign Up
            </button>
            <button type="button" aria-pressed={!isSignup} onClick={() => switchMode("login")} className={tabClass}>
              Log In
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 bg-gray-800/60 border-2 border-gray-700 p-6">
            {isSignup && (
              <div>
                <label htmlFor="fname" className={labelClass}>Account name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  required
                  autoComplete="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className={labelClass}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="ps" className={labelClass}>Password</label>
              <input
                type="password"
                id="ps"
                name="psw"
                required
                minLength={6}
                autoComplete={isSignup ? "new-password" : "current-password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
              {isSignup && (
                <p className="mt-1.5 text-sm text-gray-300">At least 6 characters.</p>
              )}
            </div>

            <button
              type="submit"
              disabled={busy}
              className="bg-indigo-500 hover:bg-indigo-400 active:bg-indigo-600 disabled:opacity-60 text-white font-bold px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-sky-300"
            >
              {isSignup ? "Create Account" : "Log In"}
            </button>

            <p
              role="alert"
              aria-live="polite"
              className={`text-sm font-bold min-h-5 ${isError ? "text-red-400" : "text-emerald-400"}`}
            >
              {message}
            </p>
          </form>
        </section>
      )}
    </main>
  );
}