import { useLoaderData } from "react-router-dom"


export const MovieDetails = () => {

    const movieDetails = useLoaderData();
    console.log(movieDetails);

    return (
        <div className="p-10 flex items-center">
            <div className="w-[25%]">
                <img 
                src={movieDetails.Poster}
                alt={movieDetails.Title}
                />
            </div>
            <div className="flex flex-col gap-5 w-[70%]">
                <h1 className="font-bold text-[40px]">{movieDetails.Title}</h1>
                <p className="text-[20px]">
                    <span className="font-bold">Actors: </span>
                    {
                        movieDetails.Actors
                    }
                </p>
                <p className="text-[20px]">
                    <span className="font-bold">Rated: </span>
                    {
                        movieDetails.Rated
                    }
                </p>
                <p className="text-[20px]">
                    {
                        movieDetails.Plot
                    }
                </p>
                <p className="text-[20px]">
                    <span className="font-bold">Awards: </span>
                    {
                        movieDetails.Awards=="N/A"?"No Awards":movieDetails.Awards
                    }
                </p>
                <p className="text-[20px]">
                    <span className="font-bold">Box Office: </span>
                    {
                        movieDetails.BoxOffice=="N/A"?"No Collection":movieDetails.BoxOffice
                    }
                </p>
                <div className="text-[20px]">
                    <h1 className="font-bold text-[25px]">Ratings</h1>
                    {
                        movieDetails.Ratings.map((curRating,index) => <p key={index}>
                            <span className="font-bold">{curRating.Source}: </span>
                            {
                                curRating.Value
                            }
                        </p>)
                    }
                </div>
            </div>
        </div>
    )
}