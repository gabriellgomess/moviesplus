import  {React,  useEffect, useState, useContext } from "react";
import "./Details.css";
import api_all from "../Services/api_all";
import MyContext from "../contexts/myContext";


const Details = (props) => {

    const[searchDetails, setSearchDetails] = useState("");
    const[details, setDetails] = useState([]);
    const[loading, setLoading] = useState(false);
    const{show, setShow} = useContext(MyContext);

    useEffect(() => {
        async function loadMoviesDetails() {            
            try {
                const responseAll = await api_all.get("", {
                    params: {
                        t: props.id
                    }
                });
                setDetails(responseAll.data)                          
                
            } catch (err) {
                // setError(true);
            }
            // setLoading(false);
        }
        loadMoviesDetails(); 
    }, [props.id, show]);

    const HandleClose = () => {
        setShow("");
    }
    
    return(
    <div className="container-details">        
        <div className="card-details">
            <button onClick={()=>{HandleClose()}}>Close</button>     
            <h4>{details.Title}</h4>
            <p>Country: {details.Country}</p>
            <p>Actors: {details.Actors}</p>
            <p>Genre: {details.Genre}</p>
            <p>Language: {details.Language}</p>
            <p>Plot: {details.Plot}</p>
            <p>Duration: {details.Runtime}</p>
            <p>Type: {details.Type}</p>
            <p>Year: {details.Year}</p>
            <p>Imdb Rating: {details.imdbRating}</p>
        </div>
    </div>
        

    )
}

export default Details;