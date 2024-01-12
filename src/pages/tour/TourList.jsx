import TourCard from "../../components/tourCard/TourCard";
import styles from "./tourlist.module.css";
import Cards from "../../components/offreCards/Cards";
import FilterNav from "../../components/filterNav/FilterNav";
const TourList = () => {
  const hotels = [
    {
      images: ["", "", ""],
      name: "استان همدان/شهر ملایر",
      score: 4.5,
      address1: "مدت: ۲روز و ۳ شب",
      address2: "نوع: تفریحی-تاریخی",
      address3: "درجه احراز: حرفه ای",
      address4: "بیمه: ندارد",
      address5: "نوع امکان: هتل روستایی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "استان همدان/شهر ملایر",
      score: 4.5,
      address1: "مدت: ۲روز و ۳ شب",
      address2: "نوع: تفریحی-تاریخی",
      address3: "درجه احراز: حرفه ای",
      address4: "بیمه: ندارد",
      address5: "نوع امکان: هتل روستایی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "استان همدان/شهر ملایر",
      score: 4.5,
      address1: "مدت: ۲روز و ۳ شب",
      address2: "نوع: تفریحی-تاریخی",
      address3: "درجه احراز: حرفه ای",
      address4: "بیمه: ندارد",
      address5: "نوع امکان: هتل روستایی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "استان همدان/شهر ملایر",
      score: 4.5,
      address1: "مدت: ۲روز و ۳ شب",
      address2: "نوع: تفریحی-تاریخی",
      address3: "درجه احراز: حرفه ای",
      address4: "بیمه: ندارد",
      address5: "نوع امکان: هتل روستایی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "استان همدان/شهر ملایر",
      score: 4.5,
      address1: "مدت: ۲روز و ۳ شب",
      address2: "نوع: تفریحی-تاریخی",
      address3: "درجه احراز: حرفه ای",
      address4: "بیمه: ندارد",
      address5: "نوع امکان: هتل روستایی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "استان همدان/شهر ملایر",
      score: 4.5,
      address1: "مدت: ۲روز و ۳ شب",
      address2: "نوع: تفریحی-تاریخی",
      address3: "درجه احراز: حرفه ای",
      address4: "بیمه: ندارد",
      address5: "نوع امکان: هتل روستایی",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
  ];
  return (
    <>
      <div className={styles.top}>
        <Cards />
      </div>
      <div className={styles.top1}>
        <FilterNav />
      </div>
      <div className={styles.hotelscard}>
        {hotels.map((hotel, index) => (
          <TourCard
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
    </>
  );
};

export default TourList;
