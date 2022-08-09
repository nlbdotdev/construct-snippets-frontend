// Core
import React, { useState } from 'react'
import { useToggle, upperFirst } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import {
  TextInput, PasswordInput, Text, Paper,
  Group, Button, Divider, Checkbox, Stack,
  Anchor, Box, LoadingOverlay, Alert, MediaQuery
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';

// Context
import { useUser } from '../context/userContext';
import { useApp } from '../context/appContext';

import { GoogleButton, TwitterButton, GithubButton } from '../components/SocialButtons.tsx';
import { AlertCircle } from 'tabler-icons-react'
import axiosAPI from '../util/axiosAPI';

export default function Authentication(PaperProps) {

  // Context
  const { regex } = useApp()
  let { updateLogin, updateUser } = useUser()

  // Vars
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [type, toggle] = useToggle(['login', 'register'])

  // Functions
  const navigate = useNavigate()
  const login = (payload) => {
    updateLogin(true)
    updateUser(payload)
    navigate('/account')
  }

  // Form
  const form = useForm({
    initialValues: {
      email: '',
      username: '',
      password: '',
      // terms: true,
    },
    // Validation through mantine form test and appContext regex obj
    validationRules: {
      email: (value) => regex.email.test(value),
      // Need to update pw
      password: (value) => value.length >= 8,
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
      axiosAPI.post('users/login', data)
        // Login success
        .then(response => {
          if (response.status === 200) {
            setLoading(false)
            console.log('SUCCESS: ', response.data)
            const payload = response.data.payload
            login(payload)
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

      // User registration route
      axiosAPI.post('/users/create-user', data)
        .then(
          response => {
            if (response.status === 200) {
              setLoading(false)
              console.log('CREATED USER: ', response.data)
            } else {
              serverError(error, "Something went wrong, contact support")
            }
          }
        )
        .catch(error => {
          if (error.response.data.error) {
            let errors = Object.values(error.response.data.error)
            serverError(error, errors.join("\r\n"))
          }
          else {
            serverError(error, "Something went wrong, contact support")
          }
        })
    }
  }

  return (
    <Box sx={{ maxWidth: 576 }} mx="auto" style={{ position: 'relative' }}>

      <LoadingOverlay
        visible={loading}
        loaderProps={{ color: 'blue' }}
      />

      <Paper radius="md" p="xl" shadow='md' withBorder {...PaperProps} sx={{
        // maxWidth: 600,
        // display: 'flex',
        // alignItems: 'center',
      }}>

        {/* Desktop */}
        <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
          <div>
            <Text size="lg" weight={500}>
              Welcome to Construct Snippets, {type} with
            </Text>

            <Group grow mb="lg" mt="md" spacing="xs">
              <GoogleButton radius="xl">Google</GoogleButton>
              <GithubButton radius='xl'>Github</GithubButton>
            </Group>
          </div>
        </MediaQuery>

        {/* Mobile */}
        <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
          <div>
            <Text size="lg" weight={500}>
              Welcome, {type} with
            </Text>

            <Stack p="md">
              <GoogleButton radius="xl">Google</GoogleButton>
              <GithubButton radius='xl'>Github</GithubButton>
            </Stack>
          </div>
        </MediaQuery>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Stack>

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
                value={form.values.username}
                onChange={(event) => form.setFieldValue('username', event.currentTarget.value)}
                error={form.errors.username && 'Username should include at least 2 characters'}
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
            {/* {type === 'register' && (
              <Checkbox
                label="I accept terms and conditions"
                checked={form.values.terms}
                onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
              />
            )} */}

          </Stack>
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