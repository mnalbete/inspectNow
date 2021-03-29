import '../App.css';
// import Button from "@material-ui/core/Button"
import React, { useEffect, useState } from "react";
import api from '../utils/api';
import {useAuthenticatedUser} from '../utils/auth';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'


function List() {
  const user = useAuthenticatedUser();
  const history = useHistory();
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    loadProperties()
  }, [])

  function loadProperties() {
    api.getAllProperties()
      .then(res => 
        setProperties(res.data)
      )
      .catch(err => console.log(err));
  };

  // const handleSubmitEdit = async e => {
  //   e.preventDefault();
  //   try {
  //     const path = `/api/properties/` + e;
  //     history.push(path);
  //     // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

  //   } catch (err) {

  //     // Handle error responses from the API
  //     if (err.response && err.response.data) console.log(err.response.data);

  //   }
  // }
  function deleteProperty(id) {
    api.deleteProperty(id)
      .then(res => loadProperties())
      .catch(err => console.log(err));
  }
  return (
 
    <div>
      <div>
     <Link style={{color: "rgb(0, 212, 0)"}} to="/"> Home </Link>
      </div>
      
    
       
    <div className="list-group">



      {properties.length ? (properties.map(property => {
        return (
          <a href="#" className="list-group-item list-group-item-action">
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">{property.address? property.address : property._id}</h5>
              <button className="btn btn-primary" onClick={() => {history.push(`/api/properties/` + property._id)}}>Edit </button>
              <button className="btn btn-danger" onClick={() => {deleteProperty(property._id)}}>Delete </button>
            </div>
          </a>);
      })
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
  </div>
  )
};


export default List