import Image from "next/image";
import styles from "./Header.module.css";
import icon from "../../images/logov3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerCont}>
        <div className={styles.headerNav}>
          <Image src={icon} alt="" />
          <ul>
            <li>ფილმები</li>
            <li>სერიალები</li>
            <li>4K ფილმები</li>
            <li>ანიმეები</li>
            <li>ანიმე შოპინგი</li>
          </ul>
        </div>
        <div className={styles.inputCont}>
          <div>
            <input type="text" placeholder="საძიები სიტყვა"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </div>
  );
};
