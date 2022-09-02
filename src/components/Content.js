import React from 'react'

// Pages
import Signup from "../pages/Signup"
import Login from "../pages/Login"
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import MyStuff from '../pages/MyStuff'
import Authentication from '../pages/Authentication'
import Account from '../pages/Account'
import Logout from '../pages/Logout'
import NewSnippet from '../pages/NewSnippet'
import ComingSoon from '../pages/ComingSoon'
import Snippets from '../pages/Snippets'

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
                <Route path='favorites' element={<ComingSoon />} />
                <Route path='collections' element={<ComingSoon />} />
                <Route path='settings' element={<ComingSoon />} />
                <Route path='snippets' element={<Snippets />} />
                <Route path='mystuff' element={<MyStuff />} />
                <Route path='authentication' element={<Authentication />} />
                <Route path='account' element={<Account />} />
                <Route path='logout' element={<Logout />} />
                <Route path='new' element={<NewSnippet />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Container>
    )
}