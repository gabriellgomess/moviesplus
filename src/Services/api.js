import axios from "axios";

const api = axios.create({
    baseURL: `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}&`,
    // params: {
        
        
    // }
    
})


export default api