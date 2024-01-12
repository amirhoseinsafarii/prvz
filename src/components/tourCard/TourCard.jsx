import "./TourCard.css";
import { useState } from "react";
import himg from "../../assets/images/Stephen-Gregory-Church 2.svg";
import tpimg from "../../assets/images/Ellipse 52.svg";
let hotelInformaition = {
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
};

function TourCard() {
  return (
    <div className="hotel-card">
      <div className="hotel-images">
        <img src={himg} style={{ borderRadius: "10px" }} />
        <div className="discount">
          <img src={tpimg} />
        </div>
        <div className="popularity">
          <img src="./Rectangle-95.png" alt="" />
          <p>توصیه شده توسط {hotelInformaition.popularity} درصد مسافران</p>
        </div>
      </div>

      <a href="/tour-leader-profile">
        <div className="tour-name">امیرحسین صفری</div>
      </a>
      <div className="hotel-info">
        <div className="hotel-info-header">
          <p className="hotel-score">⭐ {hotelInformaition.score}</p>

          <p className="hotel-name">{hotelInformaition.name}</p>
        </div>
        <p className="hotel-address">
          {hotelInformaition.address1}
          <img src="../map-pin.svg" alt="" />
        </p>
        <p className="hotel-address">
          {hotelInformaition.address2}
          <img src="../map-pin.svg" alt="" />
        </p>
        <p className="hotel-address">
          {hotelInformaition.address3}
          <img src="../map-pin.svg" alt="" />
        </p>
        <p className="hotel-address">
          {hotelInformaition.address4}
          <img src="../map-pin.svg" alt="" />
        </p>
        <p className="hotel-address">
          {hotelInformaition.address5}
          <img src="../map-pin.svg" alt="" />
        </p>
      </div>

      <div className="hotel-description">
        <div className="price">
          <p>1,232,000 تومان</p>
        </div>
      </div>

      <button>رزرو</button>
    </div>
  );
}

export default TourCard;
