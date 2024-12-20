import NavData from "../data/NavData";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../../../assets/imgs/kian_solutions_logo.jpg";
import Hamburger from "../../../hamburger/Hamburger";

const NavBar = ({ openmenu, setOpenmenu }) => {
  const navItems = NavData;
  return (
    <nav id="nav" className={styles.container}>
      <div className={styles.brandcontainer}>
        <Link to="/" onClick={() => setOpenmenu(false)}>
          <img src={logo} alt="Kian Solutions Logo" className={styles.logo} />
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

      <div className={styles.menuicon}>
        <Hamburger isopen={openmenu} setopenmenu={setOpenmenu} />
      </div>

      <ul
        className={`${styles.mobilenav} ${
          openmenu ? styles.displaymobilenav : styles.hidemobilenav
        }`}
      >
        {navItems.map((element, index) => {
          return (
            <Link
              key={element.id}
              className={styles.navitemlink}
              scroll={true}
              to={`${element.route}`}
              onClick={() => setOpenmenu(false)}
            >
              <div className={styles.mobnavitemtitle}>{element.title}</div>
            </Link>

            
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
