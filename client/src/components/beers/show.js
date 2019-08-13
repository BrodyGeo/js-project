import React, { useState, useEffect } from "react";
import Axios from "axios";

function Show(props) {

  const [beer, setBeer] = useState({});

  useEffect(() => {
    Axios.get(`/api/beers/${props.match.params.id}`)
      .then(result => setBeer(result.data))
      .catch(err => console.error(err));
  }, [props]);

  return (
    <div className="container">
      
      <header>
        <h1>{beer.name}</h1>
      </header>

      <h3>Description</h3>
      <div>{beer.description}</div>
      <h3>Price</h3>
      <div>{beer.price}</div>
      <h3>Rating</h3>
      <div>{beer.rating}</div>

    </div>
  );
}

export default Show;
