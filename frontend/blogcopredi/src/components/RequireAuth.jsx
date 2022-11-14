import {UserContext} from "./context/userContext.js";
import {useContext} from "react";
import {Navigate} from "react-router-dom"

const RequireAuth = (redirectTo, destination,children) => {
    const {currentUser} = useContext(UserContext)
    return currentUser ? children : <Navigate to={redirectTo} state={destination} replace/>
}

export default RequireAuth