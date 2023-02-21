import React, {useState} from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { APIKEY } from "../utils/helper";
import { ENDPOINT } from "../utils/helper";
import Card from "../components/Card";






export default function Results  ()  {
    const [movies, setMovies]=useState([]);
    const [query, setQuery]=useState("");
    const history = useHistory()

    const searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=es-ES&sort_by=popularity.desc&page=1&query=${query}`;

    useEffect(() => {
      fetch(ENDPOINT)
      .then((res)=>res.json())
      .then(data=>{
        console.log(data);
        setMovies(data.results);
      })
    }, [])
  
  
    const searchMovie = async(e)=>{
      e.preventDefault();
      history.push("/results?" + query);
      try{
        const url=searchEndPoint;
        const res= await fetch(url);
        const data= await res.json();
        console.log(data);
        setMovies(data.results);
      }
      catch(e){
        console.log(e);
      }
    }
  
    const changeHandler=(e)=>{
      setQuery(e.target.value);
    }


    return(
        <>
        <div className="container my-4">
          <form className="d-flex" onSubmit={searchMovie}>
            <input className="form-control me-2" type="text"   placeholder="Search" aria-label="Search" value={query} onChange={changeHandler}/>
            <button className="btn btn-outline-info" type="submit">Search</button>
            
          </form>
        
          <div>
      {movies.length > 0 ?(
        <div className="row" id="popularMovies">
       
            

        
        
            
        
        
          {movies.map((movie)=>
          <Card key={movie.id} {...movie}/>)}
            </div>
    
    
      ):(
        <h2>No hubo Resultados</h2>
      )}
    </div>
    </div>   
         </>
        )
}
