import { keepPreviousData, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePostData, fetchPostsFromTanStack, updatePostData } from "../API/api";
import { NavLink } from "react-router";
import { useState } from "react";

export const FetchRQ = () => {

    // useEffect(()=>{
    //     getPostData();
    // },[]);

    const queryClient = useQueryClient();

    const [start, setStart] = useState(0)

    const { data, isPending, isError, error } = useQuery({
        queryKey: ["posts", start],
        queryFn: () => fetchPostsFromTanStack(start),
        // gcTime: 1000,
        staleTime: 5000,
        // refetchInterval: 1000,
        // refetchIntervalInBackground: true,
        placeholderData: keepPreviousData,
    });

    const deletePost = useMutation({
        mutationFn: (id) => deletePostData(id),
        onSuccess: (data, id) => {
            queryClient.setQueryData(["posts", start], (curElem) => {
                return curElem?.filter((post) => post.id !== id );
            })
        }
    });

    const updatePost = useMutation({
        mutationFn: (id) => updatePostData(id),
        onSuccess: (data, id) => {
            //  console.log(data, id)

            queryClient.setQueryData(["posts", start], (postData) => {
                return postData?.map((curData) => {
                    return curData.id === id ? 
                    { ...curData, title: data.title} 
                    : curData
                })
            })
        }
    })

    if(isPending){
        return (
            <h1>Loading...</h1>
        )
    }
    if(isError){
        console.log(error.message);
        return (
            <h1>Something went wrong! Please try again.</h1>
        )
    }
    return (
    <div>
        <ul>
            {
                data?.map((curPost) => {
                    return (
                        <li key={curPost.id}>
                           <NavLink to={`/rq/${curPost.id}`}>
                                <p>{curPost.id}</p>
                                <p>{curPost.title}</p>
                                <p>{curPost.body}</p>
                           </NavLink>
                           <button
                           onClick={()=>deletePost.mutate(curPost.id)}
                           >Delete</button>
                           <button
                           onClick={()=>updatePost.mutate(curPost.id)}
                           >Update</button>
                        </li>
                    )
                })
            }
        </ul>

        <div>
            <button 
            onClick={() => setStart((prev) => prev-3)}
            disabled={start<=0?true:false}
            >Prev</button>
            <p>{(start/3)+1}</p>
            <button onClick={() => setStart((prev) => prev+3)}>Next</button>
        </div>
    </div>
    )
}