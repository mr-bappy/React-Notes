import { NavLink } from "react-router-dom"

export const MovieCard = ({ moviesData }) => {
    return (
    <>
        <li className="list-none flex flex-col items-center">
            <div className="">
                <div>
                    <img 
                    src={moviesData.Poster} 
                    alt={moviesData.Title}
                    className="h-[400px] w-[100%]"
                    />
                </div>
                <div>
                    <div>
                        <button
                        className="text-center text-white bg-red-700 py-3 cursor-pointer w-[100%] text-lg"
                        >Watch Now</button>
                    </div>
                </div>
            </div>
        </li>
    </>
    )
}