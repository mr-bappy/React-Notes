import { useQuery } from "@tanstack/react-query";
import { fetchSinglePostData } from "../API/api";
import { useParams } from 'react-router-dom';

const FetchUserData = () => {

    const { id } = useParams();
    // console.log(id);

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["post", id],
        queryFn: () => fetchSinglePostData(id)
    })

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        console.log(error);
        return <h1>Something went wrong! Please try again.</h1>
    }    

    console.log(data)

    return (
    <div>
        <ul>
            <li>
                <h1>{data && data.id}</h1>
                <p>{data && data.title}</p>
                <p>{data && data.body}</p>
            </li>
        </ul>
    </div>
    )
}

export default FetchUserData;