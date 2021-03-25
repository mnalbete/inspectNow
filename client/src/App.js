import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Condo from "./components/condo"
import Main from "./components/Main"
import List from "./components/List"
import Login from "./components/Login"
import Condo from "./components/Condo"
import RegistrationForm from "./components/RegistrationForm"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"





class App extends React.Component {
  render(){
    return (
      <Router>
      <div>
        <Switch>
        <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/register">
            <RegistrationForm />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/api/properties/:id">
            <Condo />
          </Route>
          <Route exact path="/properties">
            <List />
          </Route>
        </Switch>
      </div>
    </Router>
      )
    }
  }
  
  export default App;
