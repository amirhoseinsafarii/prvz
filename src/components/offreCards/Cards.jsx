import styles from "./Cards.module.css";
const Card = ({ text }) => {
  return (
    <div className={styles.Card_container}>
      <h1 className={styles.Cards_heading}>{text}</h1>
      <span className={styles.cards_head2}>مناطق مورد بازدید</span>
      <div className={styles.card_body}>
        <div className={styles.cards_locations}>
          <div className={styles.cards_location}>
            گنجنامه
            <input type="radio" />
          </div>
          <div className={styles.cards_location}>
            غار علیصدر
            <input type="radio" />
          </div>
          <div className={styles.cards_location}>
            آرامگاه بوعلی
            <input type="radio" />
          </div>
          <div className={styles.cards_location}>
            آرامگاه باباطاهر
            <input type="radio" />
          </div>
        </div>
        <p className={styles.cards_head2}>مدت زمان مورد تور</p>
        <select className={styles.cards_select}>
          <option>تعداد روز</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <div className={styles.cards_radio}>
          <input type="radio" />
          <label>ماشین در اختیار</label>
        </div>
        <select className={styles.cards_select}>
          <option> مدل ماشین</option>
          <option>ماشین1</option>
          <option>ماشین2</option>
          <option>ماشین3</option>
          <option>ماشین4</option>
        </select>
        <div className={styles.cards_radio}>
          <input type="radio" />
          <label> راننده همراه </label>
        </div>
        <span className={styles.card_cost}>تومان3,900,000</span>
        <button className={styles.card_btn}>رزرو</button>
      </div>
    </div>
  );
};

const MiddleCard = ({ text }) => {
  return (
    <div className={styles.middle_container}>
      <h1 className={styles.middle_heading}>{text}</h1>
      <span className={styles.cards_head2}>مناطق مورد بازدید</span>
      <div className={styles.card_body}>
        <div className={styles.cards_locations}>
          <div className={styles.cards_location}>
            گنجنامه
            <input type="radio" />
          </div>
          <div className={styles.cards_location}>
            غار علیصدر
            <input type="radio" />
          </div>
          <div className={styles.cards_location}>
            آرامگاه بوعلی
            <input type="radio" />
          </div>
          <div className={styles.cards_location}>
            آرامگاه باباطاهر
            <input type="radio" />
          </div>
        </div>
        <p className={styles.cards_head2}>مدت زمان مورد تور</p>
        <select className={styles.middle_select}>
          <option>تعداد روز</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <div className={styles.middle_radio}>
          <input type="radio" />
          <label>ماشین در اختیار</label>
        </div>
        <select className={styles.middle_select}>
          <option> مدل ماشین</option>
          <option>ماشین1</option>
          <option>ماشین2</option>
          <option>ماشین3</option>
          <option>ماشین4</option>
        </select>
        <div className={styles.middle_radio}>
          <input type="radio" />
          <label> راننده همراه </label>
        </div>
        <span className={styles.card_cost}>تومان3,900,000</span>
        <button className={styles.middle_btn}>رزرو</button>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className={styles.Cards_container}>
      <Card text={"تور همدان گردی"} />
      <MiddleCard text={"تور همدان گردی ویژه"} />
      <Card text={"تور همدان گردی"} />
    </div>
  );
};

export default Cards;
