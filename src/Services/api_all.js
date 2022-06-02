import axios from "axios";

const api_all = axios.create({
    baseURL: `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&`,
    // params: {
        
        
    // }
    
})


export default api_all