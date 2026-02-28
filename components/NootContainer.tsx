"use client";

import { type ReactNode } from "react";
import styles from "../app/page.module.css";
import Counter from "./Counter";
import useNoot from "./utils/useNoot";

export default function NootContainer({ children }: { children?: ReactNode }) {
  const [noots, handleNoot] = useNoot();

  return (
    <button
      type="button"
      className={styles.container}
      onClick={handleNoot}
      style={{ backgroundColor: "#4f9eff" }}
    >
      <Counter noots={noots} />
      {children}
    </button>
  );
}
