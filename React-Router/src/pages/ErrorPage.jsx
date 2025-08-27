import { NavLink, useNavigate, useRouteError } from "react-router-dom"


export const ErrorPage = () => {

    const error = useRouteError();

    const navigate = useNavigate();

    function handleGoBack(){
        navigate(-1);
    }

    if(error.status === 404){
        return (
            <div>
                <h1>Page not found! 404 Error</h1>
                <NavLink to={"/"}>
                    <button className="m-2 px-4 py-2 bg-red-600 text-white text-xl">
                        Go To Home
                    </button>
                </NavLink>
                <button 
                className="m-2 px-4 py-2 bg-red-600 text-white text-xl"
                onClick={handleGoBack}
                >
                    Go Back
                </button>
            </div>
        )
    }

    return (
        <div>
            <h1>
                Something went wrong! Please try again. 
            </h1>
            <NavLink to={"/"}>
                    <button className="m-2 px-4 py-2 bg-red-600 text-white text-xl">
                        Go To Home
                    </button>
                </NavLink>
        </div>
    )
}