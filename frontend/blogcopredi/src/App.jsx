import React, {useEffect} from 'react';
import {UserContext} from "./context/userContext";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import NavBar from "./components/layout/NavBar.jsx";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Posts from "./components/pages/Posts";
import AddPost from "./components/pages/AddPost";
import Requests from "./components/pages/Requests";
import AddRequest from "./components/pages/AddRequest";
import Contact from "./components/pages/Contact";
import Post from "./components/pages/Post";
import Hostels from "./components/pages/Hostels";
import AddHostel from "./components/pages/AddHostel";
import useUser from "./hooks/useUser";
import RequireAuth from "./components/RequireAuth.jsx";
import RequireAdmin from "./components/RequireAdmin.jsx";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './index.css'
import Layout from "./components/layout/LayOut";

function App() {

    return (
        <div className="app">
            <Layout/>
        </div>
    );

}

export default App;
