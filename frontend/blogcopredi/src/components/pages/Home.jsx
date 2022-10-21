import React from "react";
import '../css/home.css'
import Nav from "../common/Nav";
import HomeCard from "../HomeCard";

const Home = () => {
    return (
        <div className="main-home-content-wrapper">

            <h1 className="main-home-title">
                Refugios dignos para la comunidad<br/>
                Comision Presidencial para los refugios dignos
            </h1>
            <HomeCard/>
        </div>
    )
}

export default Home