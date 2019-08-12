import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {

  const [movie, setMovie] = useState({});

  useEffect(() => {
    Axios.get(`/api/movies/${props.match.params.id}`)
      .then(result => setMovie(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      
      <header>
        <h1>{movie.title}</h1>
      </header>

      <h3>Description</h3>
      <div>{movie.description}</div>
      <h3>Price</h3>
      <div>{movie.price}</div>
      <h3>Rating</h3>
      <div>{movie.rating}</div>

    </div>
  );
}

export default Show;
