"use client"
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  // https://react.dev/reference/react/hooks
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people");
      const data = await response.json();
      console.log("data: ", data);
    };

    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <div>
        Edit src/app/page.tsx to get started!
      </div>
    </main>
  );
}
