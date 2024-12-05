// import React from "react";

function SignUp() {
  return (
    <div>
     
      <form className="form">
      <h2 style={{textAlign:'center',marginBottom:'10px'}}>Sign up page..</h2>
        <label>First name:</label>
        <input type="text" placeholder="Enter your First name"></input><br></br><br></br>

        <label>Last name:</label>
        <input type="text" placeholder="Enter your Last name"></input><br></br><br></br>

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" className="email"></input><br></br><br></br>

        <label>Password: </label>
        <input type="text" placeholder="Enter your password"></input><br></br><br></br>
        <button>Register</button>
      </form>
    </div>
  );
}

export default SignUp;
