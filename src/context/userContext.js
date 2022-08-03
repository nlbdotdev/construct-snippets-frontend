import React, { createContext, useContext, useState } from 'react'

export const userContext = createContext()
export const useUser = () => useContext(userContext)

export default function UserProvider({ children }) {

    // Login Status
    const [loggedIn, setLoggedIn] = useState(false)
    const updateLogin = (bool) => {
        setLoggedIn(bool)
    }

    // User Data
    const initUserData = {
        id: '',
        username: '',
        email: '',
        firstName: '',
        lastName: '',
    }
    const [user, setUser] = useState(initUserData)
    const updateUser = (data) => {
        setUser(data)
    }

    // Return
    return (
        <userContext.Provider value={{ user, updateUser, loggedIn, updateLogin }}>
            {children}
        </userContext.Provider>
    )
}