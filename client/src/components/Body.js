import api from '../utils/api';
import {useAuthenticatedUser} from '../utils/auth';
import { useHistory } from 'react-router-dom';

function Body() {
  const user = useAuthenticatedUser();
  const history = useHistory();
  console.log(user);
  const handleSubmit = async e => {
    e.preventDefault();



    try {

      let property = await api.createProperty({ userId: user._id });

      console.log(property.data._id);
      const path = `/api/properties/` + property.data._id;
      history.push(path);
      // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

    } catch (err) {

      // Handle error responses from the API
      if (err.response && err.response.data) console.log(err.response.data);

    }
  }
  const handleSubmitList = async e => {
    e.preventDefault();



    try {
      const path = `/api/properties/`;
      history.push(path);
      // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

    } catch (err) {

      // Handle error responses from the API
      if (err.response && err.response.data) console.log(err.response.data);

    }
  }

    return (
      <div id = "back" styles={{ backgroundImage: "./images/background.png" }}> 
<div class="row">
  <div class="col-sm-2">
    <div class="card text-center">
    <img src="/images/logo.png" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <a href="#" class="btn btn-outline-success" onClick={handleSubmitList}>View Reports</a>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card text-center">
    <img src="/images/logo.png" class="card-img-top" alt="..."></img>
      <div class="card-body">
        <a href="#" class="btn btn-outline-success" onClick={handleSubmit}>Inspect Property</a>


      </div>
    </div>
  </div>
</div>

</div>
      
    );
  }
  export default Body;