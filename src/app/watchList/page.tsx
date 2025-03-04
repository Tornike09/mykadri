'use client'
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Header } from "../components/Header/Header";
import { WatchList } from "../components/WatchList/WatchList";
import styles from "./page.module.css";

const watchListPage = () => {
  const watchList = useSelector((state: RootState) => state.watchList);
  return (
    <div>
      <Header />
      <div className={styles.mainContent}>
        <div>
          <h1>{watchList.length > 0 ? 'შენი სახავი სია' : 'შენი სანახავი სია ცარიელია'}</h1>
          <WatchList />
        </div>
      </div>
    </div>
  );
};
export default watchListPage;
