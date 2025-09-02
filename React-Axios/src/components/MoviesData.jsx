import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { MovieCard } from "./MovieCard";
import { getMovie } from "../services/GetServices";

export const MoviesData = () => {

    const [data, setData] = useState([]);

    // const API = ;

    async function getMoviesData(){
        try{    
            const res = await getMovie();
            return console.log(res);
            setData(res.data.Search);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getMoviesData();
    },[]);

    console.log(data);

    return (
        <ul className="grid grid-cols-4 gap-14 py-10 px-12 ">
            {
                data && data.length && data.map((curMovie) => {
                    return <MovieCard key={curMovie.imdbID} moviesData={curMovie}/>
                })
            }
        </ul>
    )
}