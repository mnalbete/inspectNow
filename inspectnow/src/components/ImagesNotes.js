import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";



    function ImagesNotes() {
  
        return (


                      

                    <div className="row no-gutters">
                    <div className="col-6 col-md-4">                
                    <div>
                 
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                        <li data-target="#carouselExampleIndicators" data-slide-to={2} />
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img className="d-block w-100" src="../bathroom.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src="..." alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                          <img className="d-block w-100" src="..." alt="Third slide" />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="sr-only">Next</span>
                      </a>
                  </div>
  
  


                        </div>
                    </div>
                     
                      <div className="col-12 col-sm-6 col-md-8" id = "section">
                          
                      <div className="container">
                            <div className="row">
                            <div className="col-sm">
                              
                            <div class="mb-3">
                              <label for="exampleFormControlTextarea3" class="form-label">Notes</label>
                              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>


                                </div>

                                </div>
                            
                                

                            </div>
           

                                
                  
                            </div>
                            </div>
              )}
    

    

    
    export default ImagesNotes;


    


