import { IMovie } from "@/app/types";
import styles from "./Movie.module.css";

interface IMovieProps {
  movie: IMovie;
}

export const Movie: React.FC<IMovieProps> = ({ movie }) => {
  return (
    <div className={styles.movieWrapper}>
      <div>
        <div className={styles.movieMainCont}>
          <div
            className={styles.movieImage}
            style={{ backgroundImage: `url(${movie.Poster})` }}
          ></div>
          <div
            className={styles.movie}
            style={{ backgroundImage: `url(${movie.Poster})` }}
          >
            <div className={styles.blurCont}>
              <div></div>
            </div>
          </div>
        </div>
        <div className={styles.aboutMovie}>
          <div>
            <h2>{movie.Title}</h2>
            <ul>
              <li>
                <span className={styles.yellowText}>IMDB:</span>{" "}
                <h4 className={styles.grayText}>{movie.Ratings[0].Value}</h4>
              </li>
              <li>
                <span>Year:</span>{" "}
                <h4 className={styles.grayText}>{movie.Year}</h4>
              </li>
              <li>
                <span>Category:</span> <h4>{movie.Genre}</h4>
              </li>
              <li>
                <span>Writer:</span>
                <h4> {movie.Writer}</h4>
              </li>
              <li>
                <span>Actors:</span> <h4>{movie.Actors}</h4>
              </li>
              <li className={styles.description}>
                <span>Short Description:</span>{" "}
                <h4 className={styles.whiteText}>{movie.Plot}</h4>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
