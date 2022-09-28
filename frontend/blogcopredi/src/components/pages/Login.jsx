import React from "react";
import '../css/login.css'
import LoginForm from "../LoginForm";

const Login = () => {
    return(
        <div className="main-login-content-wrapper">
            <div className="main-login-content">
                <LoginForm/>
            </div>
        </div>
    )
}

export default Login;