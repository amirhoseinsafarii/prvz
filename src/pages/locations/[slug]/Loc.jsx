import { useNavigate, useParams } from "react-router-dom";
import styles from "./Loc.module.css";
import HotelCard from "../../../components/hotelCard/HotelCard";
import CarCard from "../../../components/carCard/CarCard";
const Loc = () => {
  const { slug } = useParams();
  console.log(slug);
  return (
    <>
      {slug === "baba-taher" && <h1>ارامگاه باباطاهر</h1>}
      {slug === "bu-ali" && (
        <div>
          <div className={styles.container}>
            <h1>ارامگاه بوعلی</h1>
          </div>

          <div className={styles.cflex}>
            <div className={styles.cc}>
              <div className={styles.animatedelement1}>
                <HotelCard />
              </div>
              <div className={styles.animatedelement2}>
                <HotelCard />
              </div>
              <div className={styles.animatedelement3}>
                <HotelCard />
              </div>
              <div className={styles.animatedelement4}>
                <HotelCard />
              </div>
            </div>

            <div className={styles.cc2}>
              <div className={styles.animatedelement1}>
                <CarCard />
              </div>
              <div className={styles.animatedelement2}>
                <CarCard />
              </div>
              <div className={styles.animatedelement3}>
                <CarCard />
              </div>
              <div className={styles.animatedelement4}>
                <CarCard />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Loc;
