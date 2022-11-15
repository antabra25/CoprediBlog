import React from "react";
import {useContext} from "react";
import {UserContext} from "../context/userContext";
import {NavLink} from "react-router-dom";
import DropDown from "./DropDown.jsx";
import Button from "./Button";


const Nav = () => {

    const {currentUser, logoutUser} = useContext(UserContext)

    const itemList = [
        {path: "/", name: "Home"},
        {path: "/blog/posts", name: "Blog"},
        {path: "/requests", name: "Requests"},
        {path: "/hostels", name: "Hostels"},
        {path: "/contact", name: "Contact"},
    ]
    const options = [{name:'Nuevo',to:'/blog/posts/new'},{name:"Entradas",to:'/blog/posts'}]

    const authBtn = () => {
        return (

            <div
                className="nav-button">
                <NavLink to="/login">Iniciar Sesion</NavLink>
            </div>

        )
    }

    const logoutBtn = () => {
        return (
            <div className="btn-wrapper">
                <Button onClick={logoutUser} className="nav-button">
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
                    <li><NavLink to="/hostels">Refugios</NavLink></li>
                    <DropDown title="Blog" options={options}/>

                </ul>
            </div>
            <div className="session-control mr-6">
                {currentUser ? logoutBtn() : authBtn()}
            </div>
        </nav>

    )
}

export default Nav;