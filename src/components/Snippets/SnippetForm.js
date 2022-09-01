import { TextInput, Button, Group, Box, Textarea, LoadingOverlay, Alert, Select, MultiSelect, Paper } from '@mantine/core';

// import axios from 'axios';
import axiosAPI from '../../util/axiosAPI';
import { AlertCircle } from 'tabler-icons-react'
import React, { useState } from 'react'
import { useForm } from '@mantine/form';
import { useApp } from '../../context/appContext';

const tags = [
    { value: 'math', label: 'Math' },
    { value: 'string', label: 'String' },
    { value: 'utility', label: 'Utility' },
];


export default function SnippetForm() {

    // Can just import directly, don't need context?
    // Vars from appContext
    const { appURL, regex } = useApp()

    // Login vars
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    // Mantine form: values and validation
    const form = useForm({
        initialValues: {
            title: '',
            type: 'function',
            desc: '',
            clipboard: '',
            tags: [],
        },
    });

    // To do
    // Form submission with axios and appURL
    const onSubmit = (data) => {

        console.log('submit data:', data)

        // Reset login vars
        setLoading(true)
        setError(false)
        setErrorMessage('')

        // User login route
        axiosAPI.post(`snippets/create-snippet`, data)
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
               
                    console.log('Login Error:', error.response.data)
                    setErrorMessage("Something went wrong, contact support")
                
            })
    }

    return (
        <div>
            <Box sx={{ maxWidth: 600 }} mx="auto">

                <h1>New Snippet</h1>
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
                        label="Title"
                        placeholder="Snippet Title"
                        {...form.getInputProps('title')}
                    />

                    <Select
                        required
                        label="Type"
                        placeholder="Pick one"
                        data={[
                            { value: 'function', label: 'Function' },
                        ]}
                        {...form.getInputProps('type')}
                    />

                    <MultiSelect
                        data={tags}
                        label="Tags"
                        placeholder="Pick all that you like"
                        {...form.getInputProps('tags')}
                    />


                    <Textarea
                        required
                        label="Description"
                        placeholder="Description"
                        {...form.getInputProps('desc')}
                    />

                    <Textarea
                        required
                        label="Clipboard"
                        placeholder="Clipboard from Construct 3"
                        {...form.getInputProps('clipboard')}
                    />
                    <Group position="right" mt="md">
                        <Button type="submit">Submit</Button>
                    </Group>

                </form>
            </Box>
        </div >
    )
}
