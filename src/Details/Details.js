import  {React,  useEffect, useState, useContext } from "react";
import "./Details.css";
import api_all from "../Services/api_all";
import MyContext from "../contexts/myContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';


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
            <div className="close">
                <div className="rounded-close" onClick={HandleClose} >
                   <FontAwesomeIcon icon={faClose}className="close-details" />  
                </div>                
            </div>
            <div className="poster">
                <img src={details.Poster} alt="" />
                <div>
                    <h3>{details.Title}</h3>
                </div>                
            </div>
            <label>Plot</label>
                <p>{details.Plot}</p>
                                  
            <label>Country</label>
                <p>{details.Country}</p>
            
            <label>Actors</label>
                <p>{details.Actors}</p>
            
            <label>Genre</label>
                <p>{details.Genre}</p>
            
            <label>Language</label>
               <p>{details.Language}</p>
            
            <div className="details-items">
                <div>
                    <label>Duration</label>
                    <p>{details.Runtime}</p>
                </div>
                <div>
                    <label>Type</label>
                    <p>{details.Type}</p>
                </div>
                <div>
                    <label>Year</label>
                    <p>{details.Year}</p>
                </div>
                <div>
                    <label>IMDB Rating</label>
                    <p>{details.imdbRating}</p>
                </div>
            </div>
        </div>
    </div>
        

    )
}

export default Details;