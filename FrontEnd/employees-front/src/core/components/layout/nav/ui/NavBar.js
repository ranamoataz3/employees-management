import NavData from "../data/NavData";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = ({ openmenu, setOpenmenu }) => {
  const navItems = NavData;
  return (
    <nav id="nav" className={styles.container}>
      <div className={styles.brandcontainer}>
        <Link to="/" onClick={() => setOpenmenu(false)}>
        </Link>
      </div>
      <ul className={styles.menucontainer}>
        {navItems.map((element, index) => {
          return (
            <Link
              to={`${element.route}`}
              key={element.id}
              className={styles.navitemlink}
              scroll={true}
            >
              <div className={styles.navitemtitle}>{element.title}</div>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
