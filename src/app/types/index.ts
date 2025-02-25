import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface IMovie {
    Poster: string | StaticImport;
    Title: string,
    Year: string,
    imdbID: string,
    Actors: string,
    Genre: string,
    Runtime: string,
    Writer: string,
    Plot: string,
    Ratings: [
    {
      Value: string
    }
  ],
}