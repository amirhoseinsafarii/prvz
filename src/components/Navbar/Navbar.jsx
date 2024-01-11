import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#">جاذبه های توریستی</a>
        </li>
        <li>
          <a href="#">اقامت</a>
        </li>
        <li>
          <a href="#">حمل و نقل</a>
        </li>
        <li>
          <a href="#">تور های گردشگری</a>
        </li>
        <li>
          <a href="#">سوغات همدان</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
