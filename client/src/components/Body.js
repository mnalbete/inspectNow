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

//     return (
//       <div id = "back" styles={{ backgroundImage: "./images/background.png" }}> 
// <div class="row">
//   <div class="col-sm-2">
//     <div class="card text-center">
//     <img src="/images/logo.png" class="card-img-top" alt="..."></img>
//       <div class="card-body">
//         <a href="#" class="btn btn-outline-success" onClick={handleSubmitList}>View Reports</a>
//       </div>
//     </div>
//   </div>
//   <div class="col-sm-2">
//     <div class="card text-center">
//     <img src="/images/logo.png" class="card-img-top" alt="..."></img>
//       <div class="card-body">
//         <a href="#" class="btn btn-outline-success" onClick={handleSubmit}>Inspect Property</a>


//       </div>
//     </div>
//   </div>
// </div>

// </div>

return (
  <div className = "backgroundHome"  style={{ 
    backgroundImage: `url(/images/pexels-binyamin-mellish-106399.jpg)`,   backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: `1960px`
  }}>

    <div class = "home" >
<div >
{/* <div class="col-sm-2"> */}
{/* <div class="card text-center"> */}
{/* <img src="/images/logo.png" class="card-img-top" alt="..."></img> */}
  {/* <div class="card-body"> */}
    <a href="#" class="btn btn-success btn-block mt-3" onClick={handleSubmitList}>View Reports</a>
  {/* </div>
</div> */}
</div>
{/* <div class="col-sm-2"> */}
{/* <div class="card text-center"> */}
{/* <img src="/images/logo.png" class="card-img-top" alt="..."></img> */}
  {/* <div class="card-body"> */}
    <a href="#" class="btn btn-success btn-block mt-3" 
   onClick={handleSubmit}>Inspect Property</a>


  </div>

  
     </div>
)}
      

  export default Body;