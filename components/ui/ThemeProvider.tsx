"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Mode = "dark" | "light" | "system";
const Ctx = createContext<{ mode: Mode; set: (m: Mode) => void } | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("dark");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("devlar-theme") as Mode) || "dark";
    setMode(stored);
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const apply = () => {
      const light = mode === "light" || (mode === "system" && mq.matches);
      root.classList.toggle("light", light);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [mode, ready]);

  const set = (m: Mode) => { setMode(m); localStorage.setItem("devlar-theme", m); };
  return <Ctx.Provider value={{ mode, set }}>{children}</Ctx.Provider>;
}

export const useTheme = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useTheme outside ThemeProvider");
  return c;
};
