import React, { useState } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, PasswordInput, PasswordInputProps, Anchor } from '@mantine/core';
import axios from 'axios';
import { useApp } from '../context/appContext';

// use loading state


export default function Login() {

    const { appURL, regex } = useApp()

    const [loading, setLoading] = useState(false)

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (regex.email.test(value) ? null : 'Invalid email'),
        },
    });

    const onSubmit = data => {

        setLoading(true)

        axios.post('http://localhost:3001/users/login', data)
            .then(
                // if status code
                response => {
                    if (response.status === 200) {
                        console.log('SUCCESS: ', response.data)
                    } else {
                        console.log('Something went wrong.', response)
                    }
                }
            )
            .catch(e => console.log('CAUGHT ERROR', e.response.data.error))
    }



    return (
        <Box sx={{ maxWidth: 300 }} mx="auto">
            <h1>Login Page</h1>
            <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
                <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />

                <PasswordInput
                    required
                    label="Password"
                    placeholder="your password"
                    {...form.getInputProps('password')}
                />

                <Group position="right" mt="md">
                    <Button type="submit" loading={loading}>Submit</Button>
                </Group>
            </form>
        </Box>
    )
}