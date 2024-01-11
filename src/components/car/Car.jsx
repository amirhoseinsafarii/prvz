import styles from "./car.module.css";
import carimg from "../../assets/images/Car.svg";
import carscardimg from "../../assets/images/carscardimg.svg";
const CarList = () => {
  return (
    <>
      <div className={styles.container}>
        <svg
          width="581"
          height="131"
          viewBox="0 0 581 131"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 10C0 4.47715 4.47715 0 10 0H571C576.523 0 581 4.47715 581 10V101.091C581 106.578 576.579 111.041 571.092 111.091L38.9503 115.974C37.0772 115.991 35.2466 116.534 33.6671 117.541L15.375 129.2C8.71805 133.443 0 128.662 0 120.767V10Z"
            fill="white"
          />
        </svg>
        <h1 className={styles.text}>با کدوم ماشین بریم؟</h1>
      </div>
      <div className={styles.carimgc}>
        <img src={carimg} />
      </div>

      <div className={styles.carscardimgc}>
        <img src={carscardimg} />
      </div>
    </>
  );
};

export default CarList;
