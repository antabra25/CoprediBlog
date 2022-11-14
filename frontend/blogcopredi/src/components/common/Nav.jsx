import React from "react";
import {useContext} from "react";
import {UserContext} from "../context/userContext";
import {NavLink} from "react-router-dom";
import Button from "./Button";


const Nav = () => {

    const {currentUser, logoutUser} = useContext(UserContext)
    const authBtn = () => {
        return (

            <div
                className="w-[140px] h-[60px] bg-earth rounded-3xl font-title text-white  flex flex-col justify-center items-center hover:bg-black">
                <NavLink to="/login">Iniciar Sesion</NavLink>
            </div>

        )
    }

    const logoutBtn = () => {
        return (
            <div className="btn-wrapper">
                <Button onClick={logoutUser} className="">
                    Cerrar Sesión
                </Button>
            </div>
        )
    }

    return (

        <nav className="nav-wrapper">
            <div className="brand-logo ml-6">
                <NavLink to="/">Copredi</NavLink>
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