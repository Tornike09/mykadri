import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { IMovie } from "@/app/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../../../redux/slices/watchListSlice/watchListSlice";

interface IAddToWatchListProps {
  movie: IMovie;
}

export const AddToWatchList: React.FC<IAddToWatchListProps> = ({ movie }) => {
  const [isSelected, setIsSelected] = useState(false);
  const watchList = useSelector((state: RootState) => state.watchList);
  const alreadyInList = watchList.find(
    (movieFromList) => movieFromList.imdbID === movie.imdbID
  );

  const dispatch = useDispatch();

  const addMovie = (movie: IMovie) => {
    setIsSelected(true);
    dispatch(addToWatchList(movie));
  };

  const removeMovie = (imdbID: string) => {
    setIsSelected(false);
    dispatch(removeFromWatchList(imdbID));
  };

  useEffect(() => {
    if (alreadyInList) {
      setIsSelected(true);
    }
  }, [alreadyInList]);

  console.log(isSelected);
  

  return (
    <div>
      {isSelected && alreadyInList ? (
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => removeMovie(movie.imdbID)}
          style={{ color: `${isSelected ? "#fab700" : "#fff"}` }}
        />
      ) : (
        <FontAwesomeIcon
          onClick={() => addMovie(movie)}
          icon={faHeartRegular}
        />
      )}
    </div>
  );
};
