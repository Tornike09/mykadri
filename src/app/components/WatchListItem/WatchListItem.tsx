import { IMovie } from "@/app/types";
import styles from "./WatchListItem.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { removeFromWatchList } from "../../../../redux/slices/watchListSlice/watchListSlice";

interface IWatchListItemProps {
  watchListItem: IMovie;
}
export const WatchListItem: React.FC<IWatchListItemProps> = ({
  watchListItem,
}) => {
  const dispatch = useDispatch();
  
  const removeMovie = (imdbID: string) => {
    dispatch(removeFromWatchList(imdbID));
  };

  return (
    <div className={styles.movieCont}>
      <div>
        <Image src={watchListItem.Poster} alt="" width={100} height={130} />
        <div>
          <h3>{watchListItem.Title}</h3>
          <p>{watchListItem.Plot}</p>
          <FontAwesomeIcon
            onClick={() => removeMovie(watchListItem.imdbID)}
            icon={faTrash}
          />
        </div>
      </div>
    </div>
  );
};
