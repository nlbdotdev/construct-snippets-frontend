import React, { createContext, useContext, useState } from 'react'

// This might be useless... can store regex elsewhere because it will never change. Same with URL which will use a local env variable

export const appContext = createContext()
export const useApp = () => useContext(appContext)


export default function AppProvider({ children }) {

    const regex = {
        email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i
    }

    return (
        <appContext.Provider value={{ regex }}>
            {children}
        </appContext.Provider>
    )
}