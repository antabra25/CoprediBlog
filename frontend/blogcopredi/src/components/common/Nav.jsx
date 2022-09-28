import React from "react";
import {useContext} from "react";
import {userContext} from "../context/userContext";
import {NavLink} from "react-router-dom";
import Button from "./Button";
import '../css/nav.css'

const Nav = () => {

    const currentUser = useContext(userContext)
    const authBtn = () => {
        return (

            <div className="w-[140px] h-[60px] local-button round flex flex-col justify-center items-center">
                <NavLink to="/login" >Iniciar Sesion</NavLink>
            </div>

        )
    }

    const logoutBtn = () => {
        return (
            <div className="btn-wrapper">
                <Button className="btn-sm rounded">
                    Cerrar Sesión
                </Button>
            </div>
        )
    }

    return (

        <nav className="nav-wrapper">
            <div className="brand-logo ml-6">
                <NavLink to="/home">Copredi</NavLink>
            </div>
            <div className="nav-links">
                <ul className="flex space-x-6">
                    <li><NavLink to="/contact">Contacto</NavLink></li>
                    <li><NavLink to="/blog/posts">Blog</NavLink></li>
                    <li><NavLink to="/hostels">Refugios</NavLink></li>
                </ul>
            </div>
            <div className="session-control mr-6">
                {currentUser ? logoutBtn() : authBtn()}
            </div>
        </nav>

    )
}

export default Nav;