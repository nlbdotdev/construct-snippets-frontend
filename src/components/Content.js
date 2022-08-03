import React from 'react'

// Pages
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import MyStuff from '../pages/MyStuff'
import Authentication from '../pages/Authentication'
import Account from '../pages/Account'

// Router
import { Route, Routes } from 'react-router-dom'

import { Container } from '@mantine/core'


export default function Content() {
    return (
        <Container size="xl" p='0'>
            <Routes>
                <Route index element={<Home />} />
                <Route path="user">
                    <Route index element={<Login />} />
                    <Route path="new" element={<Signup />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path='signup' element={<Signup />} />
                <Route path='mystuff' element={<MyStuff />} />
                <Route path='authentication' element={<Authentication />} />
                <Route path='account' element={<Account />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    )
}