import { createContext, useEffect, useState } from "react"; 

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        );

        const login = () => {
            setCurrentUser({id:1, name: "Jimin Wuese", profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReOCCqj9jhTj46vBUsCzzt9YQ64GunSkMjSx45P6ZZlA&s"})
        }

        useEffect(() => {
            localStorage.setItem("user", JSON.stringify(currentUser))
        }, [currentUser])

        return(
            <AuthContext.Provider value={{ currentUser, login}}>
                {children}
            </AuthContext.Provider>
        )
}
