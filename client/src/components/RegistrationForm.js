import {useRef} from "react";
import {useLogin} from '../utils/auth';
import api from '../utils/api';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";

function RegistrationForm() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    // Get the helper login function from the `useLogin` hook.
    const login = useLogin();

    const handleSubmit = async e => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        try {

            // Register the user.
            await api.register({ email, password });

            // User has been successfully registered, now log them in with the same information.
            await login({ email, password });

            const path = `/`;
            history.push(path);

            // User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

        } catch(err) {

             // Handle error responses from the API. This will include
             if( err.response && err.response.data ) console.log(err.response.data);
             
        }
    }

    //Original Registration code with proper routing. 

//     return (
//         <body style={{ backgroundImage: "url(/images/background.png)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
//             <div class="row justify-content-md-center vh-100">
//                 <form onSubmit={handleSubmit}>
//                     <h2>Register</h2>
//                     <input type="text" ref={emailRef} placeholder="Your email" /><br />
//                     <input type="password" ref={passwordRef} placeholder="Your password" /><br />
//                     <button className="btn btn-success" >Register</button>
//                 </form>
//                 <Link class= "text-success" to="/login"> Already a member? Login here. </Link>
//             </div>
//         </body>
//     )

// }



return (
         
    <body style={{ backgroundImage: `url(/images/frontDoor.jpg)`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: `1960px`, width: `100%` }}>
    <form onSubmit={handleSubmit}>
      <div className="form-group" style={{ marginRight:`10%`,marginLeft:`10%` }}>
        <label htmlFor="exampleInputEmail1" style={{ color:`white` }}>Email address</label>
        <input type="text" className="form-control" id="exampleInputEmail1" ref={emailRef} placeholder="Enter email"  />
        {/* /* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div> */
      <div className="form-group" style={{ marginRight:`10%`,marginLeft:`10%` }}>
        <label htmlFor="exampleInputPassword1" style={{ color:`white` }}>Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" ref={passwordRef} placeholder="Password"  />
      </div>
      <button type="submit" className="btn btn-success btn-lg mt-4" style={{width: `80%`,marginRight:`10%`,marginLeft:`10%`}}>Submit</button>
    </form>
    <Link className= "text-success " to="/register" style={{ color:`white` }}> Not a member? Register here. </Link>
    </body>
  );
}
export default RegistrationForm;