import { useEffect, useState } from "react"
import { fetchPosts } from "../API/api";

export const FetchOld = () => {

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    async function getPostData(){
        try{
            const res = await fetchPosts();
            res.status === 200 ? setPosts(res.data) : setPosts([]);
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getPostData();
    },[]);

    return (
    <div>
        <ul>
            {
                posts?.map((curPost) => {
                    return (
                        <li key={curPost.id}>
                            <p>{curPost.title}</p>
                            <p>{curPost.body}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
    )
}