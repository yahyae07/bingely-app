import Navbar from "@/components/Navbar";
import sharedStyles from "@/styles/shared.module.scss";
import Movies from "@/components/Movies";

export default function Home() {
  return (
    <div className={sharedStyles.page}>
      <Navbar />
      <Movies />
    </div>
  );
}
