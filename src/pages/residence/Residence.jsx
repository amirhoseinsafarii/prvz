import bimg from "../../assets/images/Stephen-Gregory-Church 2.svg";
import styles from "./residence.module.css";
import HotelCard from "../../components/hotelCard/HotelCard";
import fimg from "../../assets/images/filter-input.svg";
import FilterNav from "../../components/filterNav/FilterNav";
const Residence = () => {
  const hotels = [
    {
      images: ["", "", ""],
      name: "هتل بوعلی همدان",
      score: 4.5,
      address: "همدان-خیابان بوعلی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "هتل بوعلی همدان",
      score: 4.5,
      address: "همدان-خیابان بوعلی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "هتل بوعلی همدان",
      score: 4.5,
      address: "همدان-خیابان بوعلی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "هتل بوعلی همدان",
      score: 4.5,
      address: "همدان-خیابان بوعلی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "هتل بوعلی همدان",
      score: 4.5,
      address: "همدان-خیابان بوعلی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "هتل بوعلی همدان",
      score: 4.5,
      address: "همدان-خیابان بوعلی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
  ];
  return (
    <>
      <div className={` ${styles.midSec} `}>
        <div className={styles.content}>
          <img src={bimg} alt="mid" />
        </div>

        <div className={styles.searchBox}>
          <div className={styles.sin}>نام هتل</div>
          <div className={styles.sin}>
            <div className={styles.date}>
              <p>۱۴۰۲/۱۰/۲۱</p>
              <p>تا</p>
              <p>۱۴۰۲/۱۰/۲۳</p>
            </div>
          </div>
          <div className={styles.sbtn}>..جستجو و رزرو هتل</div>
        </div>

        <div className={styles.fillternav}>
          <FilterNav />
        </div>
        <div className={styles.midsec}>
          <div className={styles.fimg}>
            <img src={fimg} />
          </div>

          <div className={styles.hotelscard}>
            {hotels.map((hotel, index) => (
              <HotelCard
                key={index}
                images={hotel.images}
                name={hotel.name}
                score={hotel.score}
                address={hotel.address}
                distance={hotel.distance}
                price={hotel.price}
                popularity={hotel.popularity}
                discount={hotel.discount}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Residence;
