import React, { useState } from 'react'
import { useForm } from '@mantine/form';
import { TextInput, Button, Group, Box, PasswordInput, PasswordInputProps, Anchor, LoadingOverlay, Alert } from '@mantine/core';
import axios from 'axios';
import { useApp } from '../context/appContext';
import { AlertCircle } from 'tabler-icons-react'

// x Login
// x Frontend validation
// Backend validation
// Use loading state
// User Page
// Page Direct

export default function Login() {

    // Vars from appContext
    const { appURL, regex } = useApp()

    // Login vars
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // Mantine form: values and validation
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        // Email validation through mantine form test and appContext regex
        validate: {
            email: (value) => (regex.email.test(value) ? null : 'Invalid email'),
        },
    });

    // Form submission with axios and appURL
    const onSubmit = (data) => {

        // Reset login vars
        setLoading(true)
        setError(false)
        setErrorMessage('')

        // User login route
        axios.post(`${appURL}users/login`, data)
            // Login success
            .then(response => {
                setLoading(false)
                if (response.status === 200) {
                    console.log('SUCCESS: ', response.data)
                } else {
                    console.log('Login Error:', error.response.data)
                    setError(true)
                    setErrorMessage("Something went wrong, contact support")
                }
            }
            )
            // Login error handling
            .catch(error => {
                setLoading(false)
                setError(true)
                if (error.response.data.type === 'nomatch') {
                    setErrorMessage("No user found for this email/password")
                } else if (error.response.data.error.email) {
                    setErrorMessage("Email is invalid")
                } else {
                    console.log('Login Error:', error.response.data)
                    setErrorMessage("Something went wrong, contact support")
                }
            })
    }

    return (
        <Box sx={{ maxWidth: 400 }} mx="auto">

            <h1>Login Page</h1>
            <LoadingOverlay visible={loading} />

            <form onSubmit={form.onSubmit((values) => onSubmit(values))}>

                {
                    error &&
                    <Alert icon={<AlertCircle size={32} />} title="Error!" color="red" mt='sm' align="left">
                        {errorMessage}
                    </Alert>
                }
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
                    <Button type="submit">Submit</Button>
                </Group>

            </form>

        </Box>
    )
}