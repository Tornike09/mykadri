"use client";
import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import axios from "axios";
import { IMovie } from "@/app/types";
import { SuggestedMovie } from "../SuggestedMovie/SuggestedMovie";

export const Main = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?s=me and&apikey=2010f024"
        );
        if (response.data.Search as IMovie) {
          setMovies(response.data.Search);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div className={styles.wrapper}>
      <div className={styles.blurCont}></div>
      <div className={styles.moviesMainCont}>
        {movies.length > 0 && (
          <div className={styles.movies}>
            <h2>ფილმები</h2>
            <ul>
              {movies.map((movie, index) => (
                <SuggestedMovie key={index} movie={movie} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
