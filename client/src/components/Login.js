 // function Login() {
//       return (
//         <body styles={{ backgroundImage: "../../images/pexels-binyamin-mellish-106399.jpg" }}>
//         <form >
//           <div className="form-group" styles={{ backgroundImage: "client/public/images/pexels-binyamin-mellish-106399.jpg" }}>
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//             <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//         </body>
//       );
//     }
  
//     export default Login

import {useRef} from "react";
import {useLogin} from '../utils/auth';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'


    function Login() {

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
  
              await login({ email, password });

              console.log("login successful!!");
              const path = `/`;
              history.push(path);
  
              // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
  
          } catch(err) {
  
               // Handle error responses from the API
               if( err.response && err.response.data ) console.log(err.response.data);
  
          }
      }
  
  //     return (
  //       <body style={{ backgroundImage: "url(/images/background.png)", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
  //           <div class="row justify-content-md-center vh-100">
  //               <form onSubmit={handleSubmit}>
  //                   <h2>Login</h2>
  //                   <input type="text" ref={emailRef} placeholder="Your email" /><br />
  //                   <input type="password" ref={passwordRef} placeholder="Your password" /><br />
  //                   <button className="btn btn-success" >Login </button>
  //               </form>
  //               <Link class= "text-success" to="/register"> Not a member? Register here. </Link>
  //           </div>
  //       </body>
  //     )
  
  // }


  return (
         
    <body style={{ backgroundImage: `url(/images/frontdoor.jpg)`, backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', height: `1960px`, width: `100%` }}>
    <form onSubmit={handleSubmit}>
      <div className="form-group" style={{ marginRight:`10%`,marginLeft:`10%` }}>
        <label htmlFor="exampleInputEmail1" style={{ color:`white` }}>Email address</label>
        <input type="text" className="form-control" id="exampleInputEmail1" ref={emailRef} placeholder="Enter email"  />
        {/* /* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
      </div> 
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


  export default Login;