import React, { createContext, useContext, useState } from 'react'

export const appContext = createContext()
export const useApp = () => useContext(appContext)

export default function AppProvider({ children }) {

    // add env vars to change to local or hosted
    const appURL = 'http://localhost:3001/'

    const regex = {
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
    }

    return (
        <appContext.Provider value={{ appURL, regex }}>
            {children}
        </appContext.Provider>
    )
}