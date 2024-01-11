import himg from "../../assets/images/hotel-header.svg";
import styles from "./hotel.module.css";
const HotelPage = () => {
  return (
    <>
      <div className={styles.himg}>
        <img src={himg} />
      </div>
    </>
  );
};

export default HotelPage;
