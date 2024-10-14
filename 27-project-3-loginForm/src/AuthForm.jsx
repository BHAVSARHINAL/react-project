import React from 'react'
import {useState} from 'react'
function AuthForm() {
const [isLogin , setIsLogin] = useState(true)

  return (
    <div className="container">
     <div className="form-container">
      <div className="form-toggle">
        <button className={isLogin ? "active" : ""}
         onClick={()=>  setIsLogin(true)}>Login</button>
        <button className={!isLogin ? "active" : ""} 
        onClick={()=>setIsLogin(false)}>Sign up</button>
      </div>

      {isLogin ? <>
      <div className="form">
<h2>Login Form</h2>
<input type="email" placeholder="Enter your email"/>
<input type="password" placeholder="Enter your password"/>
<a href="#">Forgot password</a>
<button>Login</button>
<p>Not a member <a href="#" onClick={()=>setIsLogin(false)}>Sign up</a></p>
        </div>
      </> : <>
      
      <h2>Registration form</h2>
      <div className="form">
<input type="email" placeholder="Enter your email"/>
<input type="password" placeholder="Enter your password"/>
<button>Sign up</button>
</div>
      </>}

</div>
    </div>
      
  )
}

export default AuthForm
