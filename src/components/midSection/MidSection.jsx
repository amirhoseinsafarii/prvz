import styles from "./MidSection.module.css";
import midImg from "../../assets/images/midSec.svg";

const MidSection = () => {
  return (
    <section className={`container ${styles.midSec} `}>
      <img src={midImg} alt="mid" />
    </section>
  );
};

export default MidSection;
