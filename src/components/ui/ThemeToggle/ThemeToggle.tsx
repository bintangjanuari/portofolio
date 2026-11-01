"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import styles from "./ThemeToggle.module.scss";

export const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className={styles.toggle}
        aria-label="Toggle theme"
        disabled
      >
        <span className={styles.placeholder} />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
    >
      {isDark ? (
        <Sun size={20} className={styles.icon} />
      ) : (
        <Moon size={20} className={styles.icon} />
      )}
    </button>
  );
};

