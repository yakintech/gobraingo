import { createContext, useEffect, useState } from "react";
import { authStorageHelper } from "../utils/storageHelper";


export const AuthContext = createContext({} as AuthContextType);


export const AuthProvider = ({ children }: any) => {

    //Global state tanımladım
    const [isLogin, setisLogin] = useState(false)
    const [loading, setloading] = useState(true)


    useEffect(() => {

        authStorageHelper.getLoginStorage().then((res) => {
            if (res) {
                setisLogin(true)
            }
            setloading(false)
        }
        )

    }, [])



    const login = () => {
        setisLogin(true)
    }

    const logout = () => {
        setisLogin(false)
        setloading(false)
    }


    return (
        <AuthContext.Provider value={{ login, logout, isLogin,loading }}>
            {children}
        </AuthContext.Provider>
    )
}


//login, logout, isLogin değişkenlerini tanımladım





export interface AuthContextType {
    login: () => void;
    logout: () => void;
    isLogin: boolean;
    loading:boolean;
}