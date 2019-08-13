import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function Edit(props) {
  const [inputs, setInputs] = useState({});
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    Axios.get(`/api/vendors/${props.match.params.id}`)
      .then(result => setInputs(result.data))
      .catch(err => console.error(err));
  }, [props]);

  function handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/vendors/update", {
      id: props.match.params.id,
      company: inputs.company,
      location: inputs.location,
      rating: inputs.rating
    })
      .then(() => setRedirect(true))
      .catch(err => console.error(err));
  }

  function handleInputChange(event) {
    event.persist();
    const { name, value } = event.target;

    setInputs(inputs => ({
      ...inputs, [name]: value
    }));
  }

  if (redirect) return <Redirect to="/vendor" />;

  return (
    <div className="container">
      <header>
        <h1>Edit Vendor</h1>
      </header>
      <div>
        <form action="/vendor" method="POST" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Company</label>
            <input
              className="form-control"
              name="company"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.company}
            />
          </div>

          <div className="form-group">
            <label>Location</label>
            <textarea
              className="form-control"
              name="location"
              onChange={handleInputChange}
              value={inputs.location}
            />
          </div>

          <div className="form-group">
            <label>Rating</label>
            <select
              className="form-control"
              name="rating"
              required="required"
              onChange={handleInputChange}
              defaultValue={inputs.rating}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              
            </select>
          </div>

          <div className="form-group">
            <button className="btn btn-dark" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;