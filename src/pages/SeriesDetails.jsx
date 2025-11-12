import { Link, useParams } from "react-router";
import { useFetch } from"../hooks/useFetch";
import SeriesDetailsCard, { SeriesDetailsCardData } from "../components/SeriesDetailsCard";

export function SeriesDetailsPage() {

const { id } = useParams();

      const {
        data: SeriesDetailsCardData,
        isLoading,
        error,
        fetchData,
    } = useFetch(`tv/${id}?append_to_response=credits,keywords,videos`);

    console.log(SeriesDetailsCardData, "response")

  return (
    <div>
      
        <div>
             <SeriesDetailsCard
               key={SeriesDetailsCardData.index}
               id={SeriesDetailsCardData.id}
               img={SeriesDetailsCardData.poster_path}
               bgImg={SeriesDetailsCardData.backdrop_path}
               date={SeriesDetailsCardData.first_air_date}
               header={SeriesDetailsCardData.original_name}
               summary={SeriesDetailsCardData.overview}
               genreType={SeriesDetailsCardData.genres}
            />
        </div>
      
    </div>
    
  );
}