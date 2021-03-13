import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import style from "./style.css"
import React from "react";



    function Options() {
              return (


                    <div className="row no-gutters">
                    <div className="col-6 col-md-4">                
                    <div>
                 
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Property Information</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Report Overview</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Front Door</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">HVAC</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Ceiling</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Kitchen</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Bedroom</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Bathroom</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Living Room</button>
                            <button type="button" className="btn btn-secondary btn-lg btn-block">Patio</button>
                            
  
                        </div>
                    </div>
                     
                      <div className="col-12 col-sm-6 col-md-8" id = "section">
                          
                      <div className="container">
                            <div className="row">
                            <div className="col-sm">
                                Door
                                <br></br>

                                <ul className="list-group">
                                    <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                                    Swinging By Itself
                                    </li>
                                    <li className="list-group-item">
                                    <input className="form-check-input" type="checkbox" defaultValue aria-label="..." />
                                    Door Stop
                                    </li>
                                    <li className="list-group-item">
                                    <input className="form-check-input me-5" type="checkbox" defaultValue aria-label="..." />
                                    Handle
                                    </li>
                                    <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                                    Latching
                                    </li>
                                    <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                                    Strike Plate
                                    </li>
                                    <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                                    Scratches
                                    </li>
                                    <li className="list-group-item">
                                    <input className="form-check-input me-1" type="checkbox" defaultValue aria-label="..." />
                                    Paint
                                    </li>
                                </ul>



                                </div>

                                </div>
                            
                                

                            </div>
                            {/* <div className="col-sm">
                                Toilet
                                <br></br>

                                
                            </div> */}
                            {/* <div className="col-sm">
                                Switches/Outlets</div> */}
                            </div>
                            </div>
              )}
    


    
    export default Options;   



















//     <div className="col-12 col-sm-6 col-md-8" id = "section">
                          
//     Front Door 
//       <br></br>

