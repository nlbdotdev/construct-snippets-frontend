import React, { createContext, useContext, useState } from 'react'

export const userContext = createContext()
export const useUser = () => useContext(userContext)

export default function UserProvider({ children }) {

    const userData = {
        id: '',
        username: '',
        email: '',
        firstName: '',
        lastName: '',
    }

    const [user, setUser] = useState(userData)

    const updateUser = (data) => {
        setUser(data)
    }

    return (
        <userContext.Provider value={{ user, updateUser }}>
            {children}
        </userContext.Provider>
    )
}