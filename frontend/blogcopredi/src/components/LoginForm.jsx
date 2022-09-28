import React from "react";
import './css/loginform.css'
import Button from "./common/Button";


const LoginForm = ()=>{
    return(

            <div className="login-form-wrapper">
                <div className="login-form-title">
                    <h1>Inicio de sesión</h1>
                </div>
                <div>
                    <form className="login-form-content">
                        <div className="login-form-control">
                            <label>Correo:</label>
                            <input type="text" />
                        </div>
                        <div className="login-form-control">
                            <label>Contraseña:</label>
                            <input type="password" />
                        </div>
                        <div className="login-form-control">
                            <Button className="round btn-md">Entrar</Button>
                        </div>
                    </form>
                </div>
            </div>
    )

}

export default LoginForm;