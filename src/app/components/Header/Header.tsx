"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import icon from "../../images/logov3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { SearchModal } from "../SearchModal/SearchModal";
import { useState } from "react";
import Link from "next/link";

export const Header = () => {
  const [movieName, setMovieName] = useState("");

  const handleMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(e.target.value);
  };

  console.log(movieName);

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerCont}>
        <div className={styles.headerNav}>
          <Link href="/">
            <Image src={icon} alt="" />
          </Link>
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
            <input
              value={movieName}
              onChange={handleMovieName}
              type="text"
              placeholder="საძიებო სიტყვა..."
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <SearchModal movieName={movieName} />
          </div>
        </div>
      </div>
    </div>
  );
};
