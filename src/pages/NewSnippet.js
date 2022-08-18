import { TextInput, Button, Group, Box, PasswordInput, PasswordInputProps, Anchor, LoadingOverlay, Alert } from '@mantine/core';

import axios from 'axios';
import { useApp } from '../context/appContext';
import { AlertCircle } from 'tabler-icons-react'
import React, { useState } from 'react'
import { useForm } from '@mantine/form';
import { Photo } from 'tabler-icons-react'
import AuthWrapper from '../components/AuthWrapper'
import SnippetsFilter from '../components/Snippets/SnippetsFilter'
import SnippetsGrid from '../components/Snippets/SnippetsGrid'
import TabBar from '../components/TabBar'
import TabPage from '../components/TabPage'
import SnippetForm from '../components/Snippets/SnippetForm';

const page = <TabPage main={<SnippetForm />} aside={<SnippetsFilter />} />


const tabs = [
    { label: (<h1>New Snippet</h1>), value: 'all', color: 'red', content: page, icon: <Photo size={24} /> },
]

export default function MyStuff() {
    return (

        <AuthWrapper content={
            <TabBar tabData={tabs} tabInit={0} />
        }
        />

    )
}