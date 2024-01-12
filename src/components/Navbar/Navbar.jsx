import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="hotel-page">جاذبه های توریستی</a>
        </li>
        <li>
          <a href="/residence">اقامت</a>
        </li>
        <li>
          <a href="/car-list">حمل و نقل</a>
        </li>
        <li>
          <a href="/tour-page">تور های گردشگری</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
