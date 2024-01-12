import styles from "./typek.module.css";
import khdmtimg from "../../assets/images/khdmat.svg";

const Typek = () => {
  return (
    <>
      <div className={styles.conainer}>
        <div className={styles.p1}>
          <p>نوع خدمات خود را مشخص کنید:</p>
        </div>
        <div>
          <img src={khdmtimg} />
        </div>
      </div>

      <button className={styles.btn}>ثبت و تایید نهایی</button>
    </>
  );
};

export default Typek;
