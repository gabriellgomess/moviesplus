import axios from "axios";


const apikey = "6ddc1dcf";

const api = axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${apikey}&`,
    // params: {
        
        
    // }
    
})


export default api