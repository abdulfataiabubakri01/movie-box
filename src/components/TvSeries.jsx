import { useFetch } from "../hooks/useFetch";
import seriesCard,  { seriesCardData } from "./seriesCard";


    const TvSeries = () => {
    const { data, isLoading, error, fetchData} = useFetch("discover/tv");



  return (
    <div>
      <h1 className="absolute text-2xl pl-5 md:text-3xl pt-12 md:pt-20 font-bold p-8 md:pl-25">
        Trending Series
      </h1>
      <div className="flex justify-center flex-wrap md:pl-20 gap-3 pt-30 md:pt-40 rounded-xl ">
        {data.results?.map((seriesCardData, index) => (
          <seriesCard
            key={index}
            id={seriesCardData.id}
            img={seriesCardData.poster_path}
            SeriesName={seriesCardData.original_name}
            date={seriesCardData.first_air_date}
          />
        ))}
      </div>
    </div>
  );
};

export default TvSeries;
