import {useLogout} from "../utils/auth.js"

function Head() {
  
  const logout = useLogout();
  
  return (
  
      <nav className="navbar navbar-expand-lg navbar-light float-right">
 
            <form className="d-flex">
              <button className="btn btn-outline-success float-right" type="submit" onClick={logout}>Logout</button>
            </form>

      </nav>
    );
  }


  export default Head