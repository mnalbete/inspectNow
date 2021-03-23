import React from 'react'
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
        <div>
          <Head />
          <Body />
          <RegistrationForm />
          <Login />

          </div>
      )
    }
  }
  
  export default App;
