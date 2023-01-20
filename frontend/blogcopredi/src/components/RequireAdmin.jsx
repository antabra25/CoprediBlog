import {useContext} from "react";
import {UserContext} from "../context/userContext.js";
import {Navigate} from "react-router-dom";

const RequireAdmin = ({redirectTo, destination, children}) => {
    const {currentUser} = useContext(UserContext)
    return currentUser && currentUser.isAdmin ? children : <Navigate to={redirectTo} state={destination} replace/>
}

export default RequireAdmin;