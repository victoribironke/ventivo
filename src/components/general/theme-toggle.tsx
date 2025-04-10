"use client";

import { THEME_KEY } from "@/constants/constants";
import { useEffect } from "react";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { app_theme } from "@/atoms/atoms";

const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(app_theme);

  const changeTheme = () => {
    localStorage.setItem(THEME_KEY, theme === "dark" ? "light" : "dark");

    setTheme((t) => (t === "dark" ? "light" : "dark"));

    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const t = localStorage.getItem(THEME_KEY) as "light" | "dark";

    if (t) {
      setTheme(t);

      if (t === "dark") document.body.classList.add("dark");
    } else {
      setTheme("dark");

      document.body.classList.add("dark");
    }
  }, []);

  return (
    <div className="fixed bottom-8 right-8">
      <Button variant="outline" onClick={changeTheme}>
        Switch to {theme === "dark" ? "light" : "dark"} mode
      </Button>
    </div>
  );
};

export default ThemeToggle;
