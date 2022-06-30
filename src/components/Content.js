import React from 'react'

// Pages
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

// Router
import { Link, Route, Routes } from 'react-router-dom'
import { Text } from '@mantine/core'


export default function Content() {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="user">
                <Route index element={<Login />} />
                <Route path="new" element={<Signup />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}