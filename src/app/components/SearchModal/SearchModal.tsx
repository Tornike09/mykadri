"use client";
import { useEffect, useState } from "react";
import styles from "./SearchModal.module.css";
import axios from "axios";
import { IMovie } from "@/app/types";
import Image from "next/image";
import notAvailable from "../../images/product-image-1.png";
import Link from "next/link";

interface ISearchModalProps {
  movieName: string;
}

export const SearchModal: React.FC<ISearchModalProps> = ({ movieName }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=2010f024&s=${movieName}`
        );

        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      } catch (err) {
        console.log(err);
      }
    };
    if (movieName) {
      getMovies();
    }
  }, [movieName]);

  return (
    <>
      {movies.length > 0 && movieName && (
        <div className={styles.modalWrapper}>
          <ul>
            {movies.map((movie, index) => (
              <li key={index}>
                <Link href={`/${movie.imdbID}`}>
                  <Image
                    src={movie.Poster !== "N/A" ? movie.Poster : notAvailable}
                    alt={movie.Title}
                    width={80}
                    height={100}
                  />
                  <div>
                    <p>{movie.Title}</p>
                    <h5>{movie.Year}</h5>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
