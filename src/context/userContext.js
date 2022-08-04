import React, { createContext, useContext, useState } from 'react'
import { loadItem, setItem } from '../util/localStorage'

export const userContext = createContext()
export const useUser = () => useContext(userContext)

export default function UserProvider({ children }) {

    // Login Status
    const [loggedIn, setLoggedIn] = useState(loadItem('loggedIn', false))
    const updateLogin = (bool) => {
        setLoggedIn(bool)
        setItem('loggedIn', bool)
    }

    // User Data
    const initUserData = {
        id: '',
        username: '',
        email: '',
        firstName: 'fff',
        lastName: 'xx',
    }
    const [user, setUser] = useState(loadItem('userData', initUserData))
    const updateUser = (data) => {
        setUser(data)
        setItem('userData', data)
    }

    // Reset All
    const resetUser = () => {
        updateLogin(false)
        updateUser(initUserData)
    }

    // Return
    return (
        <userContext.Provider value={{ user, updateUser, loggedIn, updateLogin, resetUser }}>
            {children}
        </userContext.Provider>
    )
}