import React from 'react';
import Spinner from '../components/Spinners';
import Alert from '../components/Alert';
import { useEffect, useState } from 'react';
import { ENDPOINT} from '../utils/helper';
import Card from '../components/Card';

const  Home= () =>{
  const [movies , setMovies]=useState([]);

  const cargarPelis=()=>{
  fetch(ENDPOINT)
  .then(res =>res.json())
  .then(data=>{
    setMovies(data.results)
  })
}
useEffect(cargarPelis,[]);

return(
<>
<div className="container my-4">
  <Alert />
  
    {
      movies ?
      null
      :
    <Spinner />
    }
  <div className="row" id="popularMovies">
      {
        movies.map( movie => (
          <Card key={movie.id}{...movie} />
        ))
      }
      </div>
  </div>


</>
);
}

export default Home;