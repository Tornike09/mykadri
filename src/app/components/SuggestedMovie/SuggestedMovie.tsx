"use client";
import { IMovie } from "@/app/types";
import styles from "./SuggestedMovie.module.css";
import Link from "next/link";
import { useState } from "react";

interface ISuggestedMovieProps {
  movie: IMovie;
}

export const SuggestedMovie: React.FC<ISuggestedMovieProps> = ({ movie }) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };
  console.log(isSelected);

  return (
    <li
      className={styles.movie}
      onMouseEnter={toggleSelection}
      onMouseLeave={toggleSelection}
    >
      {isSelected && <div className={styles.blurCont}></div>}
      <div
        className={styles.movieImage}
        style={{ backgroundImage: `url(${movie.Poster})` }}
      >
        <div>
          <span>{movie.Year}</span>
        </div>
        {isSelected && (
          <Link href={`/${movie.imdbID}`}>
            <span></span>
          </Link>
        )}
      </div>
      <p>{movie.Title}</p>
    </li>
  );
};
