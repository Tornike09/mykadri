"use client";
import styles from "./WatchList.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { WatchListItem } from "../WatchListItem/WatchListItem";

export const WatchList = () => {
  const watchList = useSelector((state: RootState) => state.watchList);
  return (
    <div className={styles.watchList}>
      <ul>
        {watchList.length > 0 &&
          watchList.map((watchListItem, index) => <WatchListItem key={index} watchListItem={watchListItem}/>)}
      </ul>
    </div>
  );
};
 