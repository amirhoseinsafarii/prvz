import "./CarCard.css";
import { useState } from "react";
import himg from "../../assets/images/Car(1).svg";

let hotelInformaition = {
  images: ["", "", ""],
  name: "خودرو mvm",
  score: 4.5,
  address: "3روز",
  distance: 1.4,
  price: 12222222,
  popularity: 86,
  discount: 15,
};

function CarCard() {
  return (
    <div className="hotel-card">
      <div className="hotel-images">
        <img src={himg} style={{ borderRadius: "10px" }} />

        <div className="popularity">
          <img src="./Rectangle-95.png" alt="" />
          <p>توصیه شده توسط {hotelInformaition.popularity} درصد مسافران</p>
        </div>
      </div>

      <div className="hotel-info">
        <div className="hotel-info-header">
          <p className="hotel-name">{hotelInformaition.name}</p>
          <p className="hotel-score">⭐ {hotelInformaition.score}</p>
        </div>
        <p className="hotel-address">{hotelInformaition.address}</p>
      </div>

      <div className="hotel-description">
        <div className="price">
          <p>1,232,000 تومان</p>
          <p>شروع قیمت از</p>
        </div>
      </div>

      <button>رزرو</button>
    </div>
  );
}

export default CarCard;
