
import  SeriesCard, { SeriesCardData } from "./seriesCard";
import { useFetch } from "../hooks/useFetch";


    const TvSeries = () => {
    const { data, isLoading, error, fetchData} = useFetch("discover/tv");
    console.log(data, "response");


  return (
    <div>
      <h1 className="absolute text-2xl pl-5 md:text-3xl pt-12 md:pt-20 font-bold p-8 md:pl-25">
        Trending Series
      </h1>
      <div className="flex justify-center flex-wrap md:pl-20 gap-3 pt-30 md:pt-40 rounded-xl ">
        {data.results?.map((SeriesCardData, index) => (
          <SeriesCard
            key={index}
            id={SeriesCardData.id}
            img={SeriesCardData.poster_path}
            SeriesName={SeriesCardData.original_name}
            date={SeriesCardData.first_air_date}
          />
        ))}
      </div>
    </div>
  );
};

export default TvSeries;
