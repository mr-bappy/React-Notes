import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

// to fetch the data
export const fetchPosts = () => {
    return api.get("/posts");
}

// to fetch from TanStack
export const fetchPostsFromTanStack = async (start) => {
    const res = await api.get(`/posts?_start=${start}&_limit=3`);
    return res.status === 200 ? res.data : [];
}

// to fetch single data 
export const fetchSinglePostData = async (id) => {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
}

// to delete a single data
export const deletePostData = (id) => {
    return api.delete(`/posts/${id}`)
}

// to update the data in API
export const updatePostData = (id) => {
    return api.patch(`/posts/${id}`), { title: "I have been updated" };
}

// to fetch infinite scroll
export const fetchInfiniteScroll = async ({ pageParam = 1}) => {
    const res = await axios.get(`https://api.github.com/users?per_page=10&page=${pageParam}`);
    return res.data;
}