import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Condo from "./components/condo"
import Main from "./components/Main"
import List from "./components/list"
import Login from "./components/Login"
import Condo from "./components/Condo"
import RegistrationForm from "./components/RegistrationForm"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
import useIsAuthenticated from "./utils/auth"
import PrivateRoute from "./components/PrivateRoute"
import GuestRoute from "./components/GuestRoute"





<<<<<<< HEAD

class App extends React.Component {
  render(){
=======
function App()  {

  
  
  
>>>>>>> e987d82c50bc08a8873f20216a4c94f304265681
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
        </Switch>
      </div>
    </Router>
      )
    }
  
  
  export default App;
