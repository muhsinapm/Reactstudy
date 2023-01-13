import React, { useRef } from "react";
import Home from "./Home";


function Login() {

    const email = useRef();
    const password = useRef();
    const getEmail = localStorage.getItem("emailData");
    const getpassword = localStorage.getItem("passwordData");


    const handleSubmit=()=>{
    
        if (email.current.value === "muhsina@gmail.com" && password.current.value === "12345" )
            
        {
            localStorage.setItem("emailData", "muhsina@gmail.com")
            localStorage.setItem("passwordData","12345")
            }
}

    return (
        <>
            {
                getEmail&&getpassword?<Home/>:
              <form >
                <label>Username</label><input type="text" ref={email}></input><br/>
                <label>Password</label><input type="password" ref={password}></input><br/>
                <button onClick={handleSubmit} >LOGIN</button>
              </form>
            }
        </>

    );
}


export default Login;