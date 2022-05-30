import {React, useState, useEffect, useContext} from "react";
import "./Main.css";
import api from "../Services/api";
import api_all from "../Services/api_all";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Details from "../Details/Details";
import MyContext from "../contexts/myContext";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [searchAll, setSearchAll] = useState("");
    const [searchFull, setSearchFull] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const[show, setShow] = useState();
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false);
    
    useEffect(() => {        
        async function loadMovies() {
            // setLoading(true);
            try {
                const response = await api.get("", {
                    params: {
                        s: search,
                        page: page
                    }
                });
                setMovies(response.data.Search);
                setTotalPages(Math.ceil(response.data.totalResults / 10));
            } catch (err) {
                // setError(true);
            }
            // setLoading(false);
        }
        loadMovies();
        
    }, [page, search]);

    const HandleSearch = (e) => {
        setSearch(e.target.value);
        setPage(1);
    }    
    const HandleForward = () => {
        if (page < totalPages) {
            setPage(page - 1);
        }
    }
    const HandleNext = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    }
    const HandleMore = (e) => {
        setShow(e)    } 
    
    return(
        <>
        <div className="main">
            <div className="form-search">
                <div className="wrapper-input">
                    <input type="text" placeholder="Digite sua busca" className="container__input form-control" onChange={(e)=>{HandleSearch(e)}} />
                    <label className="container__label">Digite sua busca</label>
                </div>
            </div>
            <div className="container-filmes">
                {movies?.map(filmes=>{
                    return(
                        <MyContext.Provider value={{show, setShow}}>
                            <div className="card-movie" key={Math.random()*10}>
                                <div className="img-movie">
                                    {filmes.Poster === "N/A"?
                                    <div className="container-img-notFound">
                                        <FontAwesomeIcon className="img-not-found" icon={faBan} />
                                        <p>Imagem não encontrada</p>
                                    </div>
                                    :<img src={filmes.Poster} alt=""/>}                                    
                                </div>
                                <div className="text-movie">
                                    <h4>{filmes.Title}</h4>
                                    <p>{filmes.Year}</p>   
                                </div>
                                <div className="btn-more-info" onClick={()=>{HandleMore(filmes.Title)}}>Saiba Mais</div>                                                          
                                
                                {show === filmes.Title ? <Details id={filmes.Title}/>:null}                            
                            </div>
                        </MyContext.Provider>
                    )
                })}
            </div>                
        </div>
        {totalPages > 1 ? 
        <div className="container-paginate">
            <div className="paginate-btn">
                <div className="btn-pg">
                <FontAwesomeIcon onClick={()=>{HandleForward()}} className="forward" icon={faChevronLeft} />
                </div>                
                <p>{page} de {totalPages}</p>
                <div className="btn-pg">
                <FontAwesomeIcon onClick={()=>{HandleNext()}} className="next" icon={faChevronRight} />
                </div>
                
            </div>
            
        </div>
        : null
    }
        
        </>
        
    )
}

export default Main;
