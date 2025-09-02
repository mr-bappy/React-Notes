import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchInfiniteScroll } from "../API/api"
import { useEffect } from "react";
import { useInView } from"react-intersection-observer";

export const InfiniteScroll = () => {

    const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['users'],
        queryFn: fetchInfiniteScroll,
        getNextPageParam: (lastPage, allPages) => {
            console.log("lastpage", lastPage);
            console.log("all pages", allPages);
            return lastPage.length === 10 ? allPages + 1 : undefined;
        }
    });

    // function handleScroll(){

    //     const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    //     if(bottom && hasNextPage ){
    //         fetchNextPage();
    //     }
    // }

    const { ref, inView } = useInView({
        threshold: 1,
    });

    useEffect(()=>{
        // window.addEventListener('scroll', handleScroll);
        // return () => window.removeEventListener('scroll',handleScroll);
        if(inView && hasNextPage ){
            fetchNextPage();
        }
    },[inView, fetchNextPage, hasNextPage]);

    if(status === "loading") return <h1>Loading...</h1>
    if(status === "error") return <h1>Something went wrong! please try again.</h1>

    console.log(data);

    return (
    <div>
        {
            data?.pages?.map((page, index) => {
                return <ul key={index}>
                    {
                        page.map((user) => {
                            return <li key={user.id}>
                                <p>
                                    {user.login}
                                </p>
                                <img 
                                src={user.avatar_url}
                                alt={user.login} 
                                width={50}
                                height={50}
                                />
                            </li>
                        })
                    }
                </ul>
            })
        }
        <div ref={ref}>
            {
                isFetchingNextPage ? <p>Loading...</p> 
                : hasNextPage ? <p>Scroll down for more users</p>
                : <p>No more users</p>
            }
        </div>
    </div>
    )
}