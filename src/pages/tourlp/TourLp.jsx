import styles from "./TourLp.module.css";
import tpimg from "../../assets/images/Ellipse 52.svg";
import HotelCard from "../../components/hotelCard/HotelCard";
import TourCard from "../../components/tourCard/TourCard";
import CarCard from "../../components/carCard/CarCard";
import simg from "../../assets/images/skill(1).svg";
const Tourlp = () => {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.w}></div>
      </div>
      <div className={styles.c1}>
        <div className={styles.f1}>
          <div className={styles.f2}>
            <div>
              <HotelCard />
            </div>
            <div>
              <TourCard />
            </div>
          </div>
          <div className={styles.f3}>
            <CarCard />
          </div>
        </div>

        <div>
          <div className={styles.tn1}>
            <div className={styles.tn}>
              <p className={styles.p1}>امیرحسین صفری</p>
              <div className={styles.p2c}>
                <p className={styles.p2}> ارائه‌دهنده‌ی خدمات</p>
              </div>
            </div>
            <div className={styles.imgc}>
              <img src={tpimg} />
            </div>
          </div>
          <div className={styles.dtl1}>
            <div className={styles.item1}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_469_281)">
                  <path
                    d="M20.7485 9.88033C20.7485 16.7966 11.8562 22.7248 11.8562 22.7248C11.8562 22.7248 2.96387 16.7966 2.96387 9.88033C2.96387 7.52194 3.90073 5.26015 5.56836 3.59252C7.236 1.92488 9.49779 0.988019 11.8562 0.988019C14.2146 0.988019 16.4764 1.92488 18.144 3.59252C19.8116 5.26015 20.7485 7.52194 20.7485 9.88033Z"
                    stroke="black"
                    stroke-width="1.97607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.8567 12.8444C13.4937 12.8444 14.8208 11.5174 14.8208 9.88033C14.8208 8.2433 13.4937 6.91623 11.8567 6.91623C10.2197 6.91623 8.89258 8.2433 8.89258 9.88033C8.89258 11.5174 10.2197 12.8444 11.8567 12.8444Z"
                    stroke="black"
                    stroke-width="1.97607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_469_281">
                    <rect width="23.7128" height="23.7128" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <p>موقعیت: همدان - خیابان استادان</p>
            </div>

            <div className={styles.item1}>
              <div className={styles.s2}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.7607 20.7487V18.7727C19.7607 17.7245 19.3443 16.7192 18.6031 15.9781C17.862 15.2369 16.8567 14.8205 15.8086 14.8205H7.90429C6.85611 14.8205 5.85087 15.2369 5.1097 15.9781C4.36853 16.7192 3.95215 17.7245 3.95215 18.7727V20.7487"
                    stroke="black"
                    stroke-width="1.97607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.8564 10.8684C14.0391 10.8684 15.8086 9.09895 15.8086 6.91624C15.8086 4.73354 14.0391 2.9641 11.8564 2.9641C9.67373 2.9641 7.9043 4.73354 7.9043 6.91624C7.9043 9.09895 9.67373 10.8684 11.8564 10.8684Z"
                    stroke="black"
                    stroke-width="1.97607"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p>تاریخ عضویت: ۱۲ مهر ۱۴۰۲</p>
              </div>
            </div>

            <div className={styles.item1}>
              <div className={styles.s3}>
                <svg
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.0796 2.18903L12.04 14.2286"
                    stroke="black"
                    stroke-width="2.18901"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M24.0795 2.18903L16.418 24.0791L12.04 14.2286L2.18945 9.85056L24.0795 2.18903Z"
                    stroke="black"
                    stroke-width="2.18901"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <p>آخرین فعالیت: ۳ ماه پیش</p>
            </div>

            <img src={simg} />
          </div>

          <div className={styles.dtl1}>
            <h2>درباره محمدمهدی مطهری:</h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.container}></div>
    </>
  );
};

export default Tourlp;
