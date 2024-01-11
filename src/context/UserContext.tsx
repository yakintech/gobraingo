import { createContext, useState } from "react";

export const UserContext = createContext({} as UserContextType);


export const UserProvider = ({ children }: any) => {

    //Global state tanımladım
    const [totalPoints, setTotalPoints] = useState(0)


    return <UserContext.Provider value={{ totalPoints, setTotalPoints }}>
        {children}
    </UserContext.Provider>
}





export interface UserContextType {
    totalPoints: number;
    setTotalPoints: (totalPoints: number) => void;
}