import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    Axios.get("/api/beers")
      .then(result => setBeers(result.data)) 
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Beers</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {beers.map(beer => (
              <tr key={beer._id}>
                <td>
                  <Link to={`/beer/${beer._id}`}>{beer.name}</Link>
                </td>
                <td>{beer.price}</td>
                <td>{beer.rating}</td>
                <td>
                  <Link to={`/beer/${beer._id}/edit`}>Edit</Link>|
                  <Link to={`/beer/${beer._id}/destroy`}>Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Index;
