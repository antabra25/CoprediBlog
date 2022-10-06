import React from "react";
import "../css/mainwrapper.css";

const MainWrapper = ({ children }) => {
  return (
    <div className="main-wrapper-theme">
      <header className="bg-header" />
      {children}
    </div>
  );
};

export default MainWrapper;
