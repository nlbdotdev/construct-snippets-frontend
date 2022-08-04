import { Paper, Box, Stack, Text } from '@mantine/core'
import React, { useEffect } from 'react'
import { useUser } from '../context/userContext';

export default function Logout() {

  const { logout } = useUser()

  useEffect(() => {
    setTimeout(() => {
      logout()
    }, 200)
  }, [])

  return (
    <Box sx={{ maxWidth: 576 }} mx="auto" style={{ position: 'relative' }}>
      <Paper radius="md" p="xl" shadow='md' withBorder >
        <Stack>
          <Text>You have been logged out, redirecting...</Text>
        </Stack>
      </Paper>
    </Box>
  )
}
