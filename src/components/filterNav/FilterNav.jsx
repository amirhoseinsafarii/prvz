import styles from "./FilterNav.module.css";

const FilterNav = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.content}>
          <text>مرتب سازی</text>
          <text className={styles.bold}>پرطرفدارترین</text>
          <text>بر حسب رضایت </text>
          <text> بیشترین تخفیف</text>
          <text> بیشترین قیمت</text>
          <text> کمترین قیمت</text>
        </div>
      </div>
    </>
  );
};

export default FilterNav;
