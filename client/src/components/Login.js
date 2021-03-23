function Login() {
      return (
        <body styles={{ backgroundImage: "/images/pexels-binyamin-mellish-106399.jpg" }}>
        <form >
          <div className="form-group" styles={{ backgroundImage: "client/public/images/pexels-binyamin-mellish-106399.jpg" }}>
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </body>
      );
    }
  
    export default Login