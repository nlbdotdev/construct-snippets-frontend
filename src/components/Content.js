import React from 'react'

// Pages
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { Authentication } from '../pages/Authentication.tsx'

// Router
import { Route, Routes } from 'react-router-dom'
import { Group, Center } from '@mantine/core'


export default function Content() {
    return (
      
        
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="user">
                        <Route index element={<Login />} />
                        <Route path="new" element={<Signup />} />
                    </Route>
                    <Route path="login" element={<Login />} />
                    <Route path='signup' element={<Signup /> } />
                    <Route path='authentication' element={<Authentication />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
          
       
    )
}