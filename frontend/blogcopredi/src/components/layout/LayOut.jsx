import {ToastContainer} from "react-toastify";
import {UserContext} from "../../context/userContext.js";
import NavBar from "./NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Contact from "../pages/Contact.jsx";
import Posts from "../pages/Posts.jsx";
import Post from "../pages/Post.jsx";
import RequireAdmin from "../RequireAdmin.jsx";
import AddPost from "../pages/AddPost.jsx";
import RequireAuth from "../RequireAuth.jsx";
import Requests from "../pages/Requests.jsx";
import AddRequest from "../pages/AddRequest.jsx";
import Hostels from "../pages/Hostels.jsx";
import AddHostel from "../pages/AddHostel.jsx";
import {useEffect,useContext} from "react";
import useUser from "../../hooks/useUser.js";



const LayOut = () => {
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


    return (
        <>
            <main className="app-container">
                <ToastContainer/>
                <UserContext.Provider value={{currentUser, setCurrentUser, loginUser, logoutUser}}>
                    <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/contact" element={<Contact/>}/>
                        <Route path="/blog/posts" element={<Posts/>}/>
                        <Route path="/blog/posts/:id" element={<Post/>}/>

                        <Route path="/blog/posts/new" element={
                            <RequireAdmin redirectTo="/login" destination="/blog/posts/new">
                                <AddPost/>
                            </RequireAdmin>}/>
                        <Route path="/blog/posts/edit/:id" element={<AddPost/>}/>
                        <Route path="/requests" element={
                            <RequireAuth redirectTo="/login" destination="/request">
                                <Requests/>
                            </RequireAuth>}/>
                        <Route path="/requests/new" element={
                            <RequireAuth redirectTo="/login" destination="/request/new">
                                <AddRequest/>
                            </RequireAuth>}/>
                        <Route path="/hostels" element={<Hostels/>}/>
                        <Route path="/hostels/new" element={
                            <RequireAdmin redirectTo="/login" destination="/hostels/new">
                                <AddHostel/>
                            </RequireAdmin>}/>
                    </Routes>
                </UserContext.Provider>
            </main>
        </>
    );
}

export default LayOut;