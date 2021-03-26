import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Condo from "./components/condo"
import Main from "./components/Main"
import List from "./components/List"
import Login from "./components/Login"
import Condo from "./components/Condo"
import RegistrationForm from "./components/RegistrationForm"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import useIsAuthenticated from "./utils/auth"
import PrivateRoute from "./components/PrivateRoute"
import GuestRoute from "./components/GuestRoute"





function App()  {

  
  
  
    return (
      <Router>
      <div>
        <Switch>
          <PrivateRoute exact path="/" redirectTo= "/login">
            <Main />
          </PrivateRoute>
          <GuestRoute exact path="/register" redirectTo= "/">
            <RegistrationForm />
          </GuestRoute>
          <GuestRoute exact path="/login" redirectTo= "/">
            <Login />
          </GuestRoute>
          <PrivateRoute exact path="/api/properties/:id">
            <Condo />
          </PrivateRoute>
          <PrivateRoute exact path="/properties">
            <List />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
      )
    }
  
  
  export default App;
