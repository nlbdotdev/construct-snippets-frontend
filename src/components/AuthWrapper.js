// Used to restrict a page to login access only

import React from 'react'

import { useUser } from '../context/userContext';
import NeedLogin from './NeedLogin';

export default function AuthWrapper(props) {

    const { content } = props
    const { loggedIn } = useUser()

    return (
        <div>
            {loggedIn && <div>{content}</div>}
            {!loggedIn && <NeedLogin />}
        </div>
    )
}