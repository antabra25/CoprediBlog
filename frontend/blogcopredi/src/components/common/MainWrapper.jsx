import React from "react";
import Footer from "./Footer.jsx";


const MainWrapper = ({children}) => {
    return (
        <>
            <div className="main-wrapper-theme">
                <header className="bg-header"/>
                {children}
            </div>
            <Footer/>
        </>
    );
};

export default MainWrapper;
