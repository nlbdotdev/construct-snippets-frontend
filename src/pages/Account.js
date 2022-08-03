// Core
import React, { useState } from 'react'
import { useForm, useToggle, upperFirst } from '@mantine/hooks';
import {
    TextInput, PasswordInput, Text, Paper,
    Group, Button, Divider, Checkbox, Stack,
    Anchor, Box, LoadingOverlay, Alert, MediaQuery, Title
} from '@mantine/core';

// Context
import { useUser } from '../context/userContext';
import { useApp } from '../context/appContext';

import { GoogleButton, TwitterButton, GithubButton } from '../components/SocialButtons.tsx';
import { AlertCircle } from 'tabler-icons-react'
import axiosAPI from '../util/axiosAPI';

export default function Account() {

    const { loggedIn, user } = useUser()

    return (
        <Box sx={{ maxWidth: 576 }} mx="auto" style={{ position: 'relative' }}>

            <Paper radius="md" p="xl" shadow='md' withBorder >

                <Stack>
                    <Text size="lg" weight={500}>
                        Hello, {user.username}
                    </Text>

                    <Text align="left">Username: {user.username}.</Text>
                    <Text align="left">
                        Email: {user.email}
                    </Text>


                    <Group>
                        <Button type="submit" >Sign Out</Button>

                    </Group>
                </Stack>

            </Paper>
        </Box>
    )
}
