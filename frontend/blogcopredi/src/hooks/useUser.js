import {useState} from "react"
import auth from "../services/authService.js"

function useUser() {
    const [currentUser, setCurrentUser] = useState(null)

    const mapUserProperties = ({_id, name, lastName, email, isAdmin}) => {
        return {
            _id,
            name,
            lastName,
            email,
            isAdmin,
        }
    }

    const setCurrentUserFromToken = () => {
        const token = auth.getJwt()

        if (token) {
            const user = auth.getJwtData(token)
            setCurrentUser(user)
        }
    }

    const loginUser = (token) => {
        auth.login(token)

        const data = auth.getJwtData(token)
        const userData = mapUserProperties(data)
        setCurrentUser(userData)
    }

    const logoutUser = () => {
        auth.logout()
        setCurrentUser(null)
    }

    return {
        currentUser,
        setCurrentUser,
        setCurrentUserFromToken,
        loginUser,
        logoutUser
    }
}

export default useUser