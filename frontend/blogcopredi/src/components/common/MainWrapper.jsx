import React from "react";
import Footer from "./Footer.jsx";


const MainWrapper = ({children}) => {
    return (
        <>
            <div className="main-wrapper-theme">
                <header className="bg-header"/>
                <div className="content-wrapper">
                    <div className="content">
                        {children}
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
};

export default MainWrapper;
