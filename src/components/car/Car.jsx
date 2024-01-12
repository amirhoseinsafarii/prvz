import styles from "./car.module.css";
import carimg from "../../assets/images/Car.svg";
import carscardimg from "../../assets/images/carscardimg.svg";
import CarCard from "../carCard/CarCard";
import mpimg from "../../assets/images/mapimgh(1).svg";
const CarList = () => {
  const hotels = [
    {
      images: ["", "", ""],
      name: "خودرو mvm",
      score: 4.5,
      address: "3روز",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "خودرو mvm",
      score: 4.5,
      address: "3روز",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "خودرو mvm",
      score: 4.5,
      address: "3روز",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "خودرو mvm",
      score: 4.5,
      address: "3روز",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "خودرو mvm",
      score: 4.5,
      address: "3روز",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
    {
      images: ["", "", ""],
      name: "خودرو mvm",
      score: 4.5,
      address: "3روز",
      distance: 1.4,
      price: 12222222,
      popularity: 86,
      discount: 15,
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <img src={mpimg} />
      </div>

      <div className={styles.carscard}>
        {hotels.map((car, index) => (
          <CarCard
            key={index}
            images={car.images}
            name={car.name}
            score={car.score}
            address={car.address}
            distance={car.distance}
            price={car.price}
            popularity={car.popularity}
            discount={car.discount}
          />
        ))}
      </div>

      <div className={styles.carscardimgc}>
        <img src={carscardimg} />
      </div>
    </>
  );
};

export default CarList;
