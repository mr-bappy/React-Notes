import axios from "axios";

const api = axios.create({
    baseURL: "http://www.omdbapi.com/"
});

// creating a get request function
export const getMovie = () => {
    return api.get("?i=tt3896198&apikey=1c12799f&s=titanic&page=1");
}