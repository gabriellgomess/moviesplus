// https://www.omdbapi.com/?apikey=6ddc1dcf&t=top%20gun

import axios from "axios";


const apikey = "6ddc1dcf";

const api_all = axios.create({
    baseURL: `https://www.omdbapi.com/?apikey=${apikey}&`,
    // params: {
        
        
    // }
    
})


export default api_all