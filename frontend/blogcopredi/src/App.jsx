import React, {useEffect} from 'react';
import {UserContext} from "./components/context/userContext";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Nav from "./components/common/Nav";
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
import useUser from "./components/hooks/useUser";
import './App.css';
import './index.css'


function App() {
    const {
        currentUser,
        setCurrentUser,
        setCurrentUserFromToken,
        loginUser,
        logoutUser
    } = useUser()

    useEffect(() => {
        setCurrentUserFromToken()
    }, [])


    return (<div className="app">
        <div className="app-container">

            <UserContext.Provider value={{currentUser, setCurrentUser, loginUser, logoutUser}}>
                <div className="app-nav">
                    <Nav/>
                </div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/blog/posts" element={<Posts/>}/>
                    <Route path="/blog/posts/:id" element={<Post/>}/>
                    <Route path="/blog/posts/new" element={<AddPost/>}/>
                    <Route path="/blog/posts/:id/edit" element={<AddPost/>}/>
                    <Route path="/requests" element={<Requests/>}/>
                    <Route path="/requests/new" element={<AddRequest/>}/>
                    <Route path="/hostels" element={<Hostels/>}/>
                    <Route path="/hostels/new" element={<AddHostel/>}/>
                </Routes>
            </UserContext.Provider>
        </div>

    </div>);

}

export default App;
