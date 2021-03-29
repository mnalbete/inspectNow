import {useLogout} from "../utils/auth.js"

function Head() {
  
  const logout = useLogout();
  
  return (
  
      <nav className="navbar navbar-expand-lg navbar-light float-right" style ={{marginTop:`15px`,marginRight:`20px`}}>
 
            <form className="d-flex">
              <button className="btn btn-link float-right" type="submit" onClick={logout}>Logout</button>
            </form>

      </nav>
    );
  }


  export default Head