import { Link, useParams } from "react-router";
import { useFetch } from"../hooks/useFetch";
import MovieDetailsCard, { MovieDetailsCardData } from "../components/MovieDetailsCard";

export function MovieDetailsPage() {

const { id } = useParams();

      const {
        data: MovieDetailsCardData,
        isLoading,
        error,
        fetchData,
    } = useFetch(`movie/${id}?append_to_response=credits,keywords,videos`);
    console.log(MovieDetailsCardData, "response")

  
  return (
    <div>
      
        <div>
             <MovieDetailsCard
               key={MovieDetailsCardData.id}
               id={MovieDetailsCardData.id}
               img={MovieDetailsCardData.poster_path}
               bgImg={MovieDetailsCardData.backdrop_path}
               date={MovieDetailsCardData.release_date}
               header={MovieDetailsCardData.original_title}
               summary={MovieDetailsCardData.overview}
               genreType={MovieDetailsCardData.genres}
            />
        
        </div>
      
    </div>
    
  );
}
