import React from "react";
import { Link } from "react-router-dom";
import images from "../assets/images/no-poster.jpg";
import Like from "./Like";



const Card =({poster_path ,title ,overview ,id})=>{
    let imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : {images};
    
    return(

        <div className="col-12 col-sm-6 col-lg-3 my-2">
        <div className="card h-100">
          <img src= {imageUrl} className="card-img-top"alt="poster" />
          <div className="card-body">
            <h5 className="card-title one-line-title">
                {title}
            </h5>
            <p className="card-text">
                {overview.substr(0, 80).trim()}
            </p>
            <Link to={`/detail/${id}`} className="btn btn-primary">Ver detalle</Link>
            <button class="corazon"><Link to="/favorite"><Like/></Link></button>
          </div>
        </div>
      </div>

    )
}
export default Card;