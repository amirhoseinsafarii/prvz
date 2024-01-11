import styles from "./Header.module.css";
import Navbar from "../Navbar/Navbar";

// icons
import userIcon from "../../assets/icons/user.svg";
import BriefIcon from "../../assets/icons/briefcase.svg";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <div className="container">
        <div className={styles.right}>
          <button className={styles.logoBtn}>همسفر</button>
          <Navbar />
        </div>
        <div className={styles.left}>
          <a href="#">
            <img src={BriefIcon} alt="briefcase icon" />
            <span>سفر های من</span>
          </a>
          <a href="#">
            <img src={userIcon} alt="user icon" />
            <span>ورود یا ثیت نام</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
