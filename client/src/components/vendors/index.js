import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function Index() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    Axios.get("/api/vendors")
      .then(result => setVendors(result.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container">
      <header>
        <h1>All Vendors</h1>
      </header>

      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Company</th>
              <th>Location</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {vendors.map(vendor => (
              <tr key={vendor._id}>
                <td>{vendor.company}</td>
                <td>{vendor.location}</td>
                <td>{vendor.rating}</td>
                <td>
                  <Link to={`/vendor/${vendor._id}/edit`}>Edit</Link>|
                  <Link to={`/vendor/${vendor._id}/destroy`}>Delete</Link>
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
