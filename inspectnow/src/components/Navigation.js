import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


    function Navigation() {
              return (
          
                <ul className="nav justify-content-end">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Condominum</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">House</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Save</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Export to PDF</a>
                </li>
              </ul>
            );
          }

    
    
    export default Navigation;