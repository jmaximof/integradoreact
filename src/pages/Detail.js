import React from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import Spinner from "../components/Spinners";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { APIKEY } from "../utils/helper";
import images from "../assets/images/no-poster.jpg"





const Detail  = ()=> {
  const {id} = useParams();
  const [movie, setMovie] = useState({});
  


  let detailEndPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}&language=es-ES`;
  
  useEffect (() => {
      fetch(detailEndPoint)
        .then(res => res.json())
        .then(data => {
            setMovie(data)
            })});
          
    
        
      let imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500` + movie.poster_path : {images};
      
    
    return(
        <>
        <Alert/>
        {
            movie ?
            null
            :
            <Spinner />
        }
      
    

        <div className="row" id="movieDetail">
        <div className="col-12 col-md-4">
        <img src= {imageUrl} className="movieImg"alt="rounded img-thumbnail" />
        </div>
        <div className="col-12 col-md-8" id="movieInfo">
          <h2>Título: {movie.title} </h2>
          <h5>Géneros:</h5>{movie.genres?.map(genre =>(
            <li key={genre.movie}>{genre.name}</li>
          ))} 
          <ul>
          </ul>
          <h5>Reseña:</h5><h6>{movie.overview}</h6> 
          <p />
          <h5 id="rating">Rating:</h5><h6>{movie.vote_average}</h6> 
          <Link to="/" className="btn btn-dark my-3">volver al listado</Link>
        </div>
      </div>
      </>
    );
          }

  export default Detail