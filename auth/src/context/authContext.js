import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUserX] = useState(null)
    const nav = useNavigate()
    const login = (data) => {
        if(data !== null) {
            setUserX(data)
            nav('/')
        }
    }

    const logout = () =>  {

    }

    const isLogin = user !== null;

    const authData = {
        user,
        login,
        logout,
        isLogin
    }

    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
}