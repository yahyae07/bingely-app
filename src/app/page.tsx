import Image from "next/image";
import styles from "./page.module.css";
import Movies from "@/components/Movies";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Movies />
      </main>
    </div>
  );
}
