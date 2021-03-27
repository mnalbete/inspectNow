import api from '../utils/api';
import {useAuthenticatedUser} from '../utils/auth';
import { useHistory } from 'react-router-dom';


function Body() {
  const user = useAuthenticatedUser();
  const history = useHistory();
  const handleSubmit = async e => {
    e.preventDefault();



    try {

      let property = await api.createProperty({userId : user._id});
      let array = property.data.properties;
      let len = property.data.properties.length
      console.log(property.data.properties[len -1]);
      let currentPropertyId = property.data.properties[len -1];
      const path = `/api/properties/` + currentPropertyId;
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
      const path = `/properties`;
      history.push(path);
      // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

    } catch (err) {

      // Handle error responses from the API
      if (err.response && err.response.data) console.log(err.response.data);

    }
  }

    return (
      <div id = "back"  class = "vh-100"
      style={{ backgroundImage: "url(/images/background.png)", backgroundSize: 'auto', backgroundRepeat: 'no-repeat'}}> 
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