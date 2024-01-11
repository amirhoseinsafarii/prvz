import styles from "./HeroSection.module.css";
import buAliImg from "../../assets/images/bu-ali.png";
import MidSection from "../midSection/MidSection";
import Map from "../map/map";
import FilterNav from "../filterNav/FilterNav";
import img1 from "../../assets/images/alisadr-hamedan 1(1).svg";
import img2 from "../../assets/images/Stephen-Gregory-Church 1.svg";
import Cards from "../offreCards/Cards";
const HeroSection = () => {
  return (
    <>
      <div className={`container ${styles.heroSec}`}>
        <div className={styles.hero}>
          <div className={styles.box}>
            <h2>همه چیز سفر خود را، یک‌جا رزرو و برنامه‌ریزی کنید.</h2>
            <p>
              یک : تایتل:(۲۴ ساعت از ۷ روز هفته و در هر روزی از سال!) متن
              زیرش:(هر لحظه و هر قدم از سفر خود را همراه با پشتیبانی یک
              همدانی(دوستی آشنا به هر کاشی از همدان و از سمت ما!) بگذرانید. )
            </p>
          </div>
          <div>
            <img src={buAliImg} alt="bu-ali" />
          </div>
        </div>
        <div className={styles.headerButton}>ثبت خدمت</div>
      </div>
      <div className={styles.offerCrdcontainer}>
        <h1 className={styles.te}>پکیج های پیشنهادی</h1>
        <Cards />
      </div>

      <MidSection />

      <div className={styles.content}>
        <div className={styles.titc}>
          <div className={styles.tit}>سوغات همدان</div>
          <div className={styles.tit}>تورهای گردشگری</div>
          <div className={styles.tit}>حمل و نقل</div>
          <div className={styles.tit}>اقامت</div>
          <div className={styles.tit}>جاذبه‌های توریستی</div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.titc}>
          <div className={styles.tit}>
            اگر سوغات مختص همدان را تولید کرده و به فروش می رسانید، می توانید با
            فعالیت در این سایت می توانید برند، فروشگاه و محصولات خود را تبلیغ و
            معرفی کنید.
          </div>
          <div className={styles.tit}>تورهای گردشگری</div>
          <div className={styles.tit}>
            حتی ساعاتی که مشغول به کار هستید، با اجاره دادن وسایل نقلیه‌ی خود،
            درآمدتان را دو برابر کنید.
          </div>
          <div className={styles.tit}>
            با تدوین تورهای جدید، علاوه بر تجربه‌ی اتفاقی نو، کسب درآمد کنید.
          </div>
          <div className={styles.tit}>
            در صورتی که مجوز اجاره و یا بوم‌گردی دارید، محل مورد نظر خود را برای
            رفع نیاز دیگران به اشتراک گذارید.
          </div>
        </div>
      </div>

      <div className={styles.downc}>
        <div className={styles.where}>همدان کـجــــا بریــم؟</div>
        <div className={styles.dcontent}>
          <div className={styles.dimg}>
            <img src={img1} />
          </div>

          <div className={styles.p}>
            شاید ندانید که غار علیصدر تنها غار آبی و  تالابی ایران است که
            طولانی‌ ترین مسیر قایق رانی را در سراسر جهان به خود اختصاص داده.
          </div>
        </div>
        <div className={styles.dcontent}>
          <div className={styles.dimg}>
            <img src={img2} />
          </div>

          <div className={styles.p}>
            فضای درونی کلیسا از ۴ ستون کاملاً  گرد ساخته شده که به وسیله قوس‌
            های جناقی به هم متصل هستند. 
          </div>
        </div>
      </div>
      {/* <Map /> */}
    </>
  );
};

export default HeroSection;
