"use client";
import { Header } from "@/app/components/Header/Header";
import { Movie } from "@/app/components/Movie/Movie";
import { IMovie } from "@/app/types";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState<IMovie>();
  useEffect(() => {
    const fetchMovietData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=2010f024&i=${imdbID}`
        );
        setMovie(response.data);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
    };

    fetchMovietData();
  }, [imdbID]);

  return (
    <div>
      <Header />
      {movie && <Movie movie={movie} />}
    </div>
  );
};
export default MoviePage;
