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

    function Login() {

      const emailRef = useRef();
      const passwordRef = useRef();
  
      // Get the helper login function from the `useLogin` hook.
      const login = useLogin();
  
      const handleSubmit = async e => {
          e.preventDefault();
  
          const email = emailRef.current.value;
          const password = passwordRef.current.value;
  
          try {
  
              await login({ email, password });

              console.log("login successful!!");
  
              // User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
  
          } catch(err) {
  
               // Handle error responses from the API
               if( err.response && err.response.data ) console.log(err.response.data);
  
          }
      }
  
      return (
          <form onSubmit={handleSubmit}>
              <h2>Login</h2>
              <input type="text" ref={emailRef} placeholder="Your email" /><br />
              <input type="password" ref={passwordRef} placeholder="Your password" /><br />
              <button>Submit</button>
          </form>
      )
  
  }

  export default Login;