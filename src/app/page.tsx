import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Movies from "@/components/Movies";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <Movies />
    </div>
  );
}
