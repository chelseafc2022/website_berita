"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export function LoginForm() {
  const [error, setError] = useState(""); const [pending, setPending] = useState(false);
  async function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); setPending(true); setError(""); const data = new FormData(event.currentTarget); const result = await signIn("credentials", { email: data.get("email"), password: data.get("password"), redirect: false }); setPending(false); if (result?.error) setError("Email atau kata sandi tidak sesuai."); else window.location.assign("/admin"); }
  return <form onSubmit={submit} className="mt-8 grid gap-5"><label className="grid gap-2 text-sm font-bold text-ink">Email<input required name="email" type="email" placeholder="redaksi@nusakabar.id" className="h-12 rounded-xl border border-slate-200 bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-brand" /></label><label className="grid gap-2 text-sm font-bold text-ink">Kata sandi<input required name="password" type="password" placeholder="••••••••" className="h-12 rounded-xl border border-slate-200 bg-white px-4 font-normal outline-none focus:ring-2 focus:ring-brand" /></label>{error && <p className="rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-700">{error}</p>}<button disabled={pending} className="mt-2 h-12 rounded-xl bg-brand text-sm font-bold text-white hover:bg-[#d73e2d] disabled:opacity-60">{pending ? "Memeriksa akun..." : "Masuk"}</button></form>;
}
