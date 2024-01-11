import { useNavigate, useParams } from "react-router-dom";
import styles from "./Loc.module.css";
const Loc = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <>
      {slug === "baba-taher" && <h1>ارامگاه باباطاهر</h1>}
      {slug === "bu-ali" && (
        <>
          <h1>ارامگاه بوعلی</h1>

          <div className={styles.animatedelement1}>خیابان .......</div>
          <div className={styles.animatedelement2}>خیابان .......</div>
          <div className={styles.animatedelement3}>خیابان .......</div>
          <div className={styles.animatedelement4}>خیابان .......</div>
          <div className={styles.animatedelement5}>خیابان .......</div>
        </>
      )}
    </>
  );
};

export default Loc;
