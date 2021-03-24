import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Condo from "./components/condo"
import Head from "./components/Head"
import Body from "./components/Body"
import List from "./components/List"
import Login from "./components/Login"
import RegistrationForm from "./components/RegistrationForm"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"





class App extends React.Component {

  
  
  render(){
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/register">
            <RegistrationForm />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
      )
    }
  }
  
  export default App;
