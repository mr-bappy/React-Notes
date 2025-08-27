import { useLoaderData } from "react-router-dom"
import { MovieCard } from "../components/UI/MovieCard";

export const Movie = () => {

    const moviesData = useLoaderData();
    console.log(moviesData);

    return (
    <ul className="grid grid-cols-4 gap-14 py-10 px-12 ">
        {
            moviesData && moviesData.Search.length && moviesData.Search.map((curMovie) => {
                return <MovieCard key={curMovie.imdbID} moviesData={curMovie}/>
            })
        }
    </ul>
    )
}