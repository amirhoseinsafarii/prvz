import "./HotelCard.css";
import { useState } from "react";
import himg from "../../assets/images/Stephen-Gregory-Church 2.svg";

let hotelInformaition = {
  images: ["", "", ""],
  name: "هتل بوعلی همدان",
  score: 4.5,
  address: "همدان-خیابان بوعلی",
  distance: 1.4,
  price: 12222222,
  popularity: 86,
  discount: 15,
};

function HotelCard() {
  return (
    <div className="hotel-card">
      <div className="hotel-images">
        <img src={himg} style={{ borderRadius: "10px" }} />
        <div className="discount">{hotelInformaition.discount}%</div>
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
        <p className="hotel-address">
          {hotelInformaition.address}
          <img src="../map-pin.svg" alt="" />
        </p>
      </div>

      <div className="hotel-description">
        <div className="distance">
          <p>فاصله تا نزدیک ترین جاذبه تاریخی</p>
          <p>1.4 کیلومتر</p>
        </div>
        <div className="price">
          <p>شروع قیمت از</p>
          <p>1,232,000 تومان</p>
        </div>
      </div>

      <button className="btn">رزرو</button>
    </div>
  );
}

export default HotelCard;
