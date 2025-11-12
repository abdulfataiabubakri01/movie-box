import React from "react";
import Moviecard, { Moviecarddata } from "./Moviecard";
import Navbar from "./Navbar";
import { useFetch } from "../hooks/useFetch";

const Movie = () => {
  const { data, isLoading, error, fetchData} = useFetch("discover/movie");
  console.log(data, "response");

  
  return (
    <div>
      <div className="relative ">
        <h1 className="absolute text-2xl pl-5 md:text-3xl pt-12 md:pt-20 font-bold p-8 md:pl-25">
          Trending Movies
        </h1>
      </div>
      <div className="flex justify-center flex-wrap md:pl-20 gap-3 pt-30 md:pt-40 rounded-xl ">
        {data.results?.map((Moviecarddata, index) => (
          <Moviecard
            key={index}
            id={Moviecarddata.id}
            img={Moviecarddata.poster_path}
            MovieName={Moviecarddata.title}
            date={Moviecarddata.release_date}
          />
        ))}
      </div>
    </div>
  );
};

export default Movie;
