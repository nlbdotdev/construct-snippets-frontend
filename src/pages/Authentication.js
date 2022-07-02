// Core
import React, { useState } from 'react'
import { useForm, useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput, PasswordInput, Text, Paper,
  Group, Button, Divider, Checkbox,
  Anchor, Box, LoadingOverlay, Alert
} from '@mantine/core';

// Other
import { useApp } from '../context/appContext';
import axios from 'axios';
import { GoogleButton, TwitterButton, GithubButton } from '../components/SocialButtons.tsx';
import { AlertCircle } from 'tabler-icons-react'

export function Authentication(PaperProps) {

  // Vars - appContext
  const { appURL, regex } = useApp()
  // Vars
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [type, toggle] = useToggle('login', ['login', 'register'])

  // Form
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      terms: true,
    },
    // Validation through mantine form test and appContext regex obj
    validationRules: {
      email: (value) => regex.email.test(value),
      // Need to update pw
      password: (value) => value.length >= 6,
    },
  })

  // Toggle form between register and login
  const toggleForm = () => {
    setError(false)
    toggle()
  }

  // Triggered when the back end rejects POST requests
  const serverError = (error, message) => {
    setLoading(false)
    console.log('Login Error:', error)
    setError(true)
    setErrorMessage(message)
  }

  // Form submission with axios and appURL
  const onSubmit = (data) => {

    // Reset vars
    setLoading(true)
    setError(false)
    setErrorMessage('')

    if (type === 'login') {

      // User login route
      axios.post(`${appURL}users/login`, data)
        // Login success
        .then(response => {
          if (response.status === 200) {
            setLoading(false)
            console.log('SUCCESS: ', response.data)
          } else {
            serverError(error.response.data, "Something went wrong, contact support")
          }
        })
        // Login error handling
        .catch(error => {
          if (error.response.data.type === 'nomatch') {
            serverError(error.response.data, "No user found for this email/password")
          } else if (error.response.data.error.email) {
            serverError(error.response.data, "Email is invalid")
          } else {
            serverError(error.response.data, "Something went wrong, contact support")
          }
        })
        .catch(error => {
          serverError(error, "Could not connect, server may be down.")
        })

    } else if (type === 'register') {

      // WORKING HERE

    }
  }

  return (
    <Box sx={{ maxWidth: 600 }} mx="auto" style={{ position: 'relative' }}>

      <LoadingOverlay visible={loading} />

      <Paper radius="md" p="xl" shadow='md' withBorder {...PaperProps} sx={{
        // maxWidth: 600,
        // display: 'flex',
        // alignItems: 'center',
      }}>
        <Text size="lg" weight={500}>
          Welcome to Construct Snippets, {type} with
        </Text>
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
          {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
          <GithubButton radius='xl'>Github</GithubButton>
        </Group>
        <Divider label="Or continue with email" labelPosition="center" my="lg" />
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Group direction="column" grow>

            {/* ERROR */}
            {
              error &&
              <Alert icon={<AlertCircle size={32} />} title="Error!" color="red" mt='sm' align="left">
                {errorMessage}
              </Alert>
            }

            {/* USERNAME */}
            {type === 'register' && (
              <TextInput
                required
                label="Username"
                placeholder="Your username"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                error={form.errors.name && 'Username should include at least 2 characters'}
              />
            )}

            {/* EMAIL */}
            <TextInput
              required
              label="Email"
              placeholder="me@email.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
            />

            {/* PASSWORD */}
            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
            />

            {/* TOS */}
            {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
            )}

          </Group>
          <Group position="apart" mt="xl">
            <Anchor component="button" type="button" color="gray" onClick={() => toggleForm()} size="xs">
              {type === 'register'
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{upperFirst(type)}</Button>
          </Group>
        </form>
      </Paper>
    </Box>
  );
}