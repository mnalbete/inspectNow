import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Home from "./Home"
import Options from "./Options"
import Images from "./ImagesNotes"
import Navigation from "./Navigation"



function Container() {
  return (
    <div>

      <Home />
      <Navigation />
      <Options />
      <Images />




    </div>
  );
}

export default Container;
