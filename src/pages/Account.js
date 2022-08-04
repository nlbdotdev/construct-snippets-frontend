// Core
import React, { useEffect } from 'react'
import { Text, Paper, Group, Button, Divider, Stack, Box } from '@mantine/core';

// Context
import { useUser } from '../context/userContext';
import NeedLogin from '../components/NeedLogin';


// Consider componetizing log in page to a wrapper

export default function Account() {

    const { user, loggedIn } = useUser()

    return (
        <div>
            {loggedIn &&
                <Box sx={{ maxWidth: 576 }} mx="auto" style={{ position: 'relative' }}>
                    <Paper radius="md" p="xl" shadow='md' withBorder >

                        <Stack>
                            <Text size="lg" weight={500}>
                                Hello, {user.username}
                            </Text>

                            <Divider labelPosition="center" my="sm" />

                            <Text align="left"><strong>Username:</strong> {user.username}</Text>
                            <Text align="left"><strong>Email:</strong> {user.email}</Text>

                            <Divider labelPosition="center" my="sm" />

                            <Group>
                                <Button type="submit" >Sign Out</Button>
                            </Group>
                        </Stack>

                    </Paper>
                </Box>
            }

            {!loggedIn &&
                <NeedLogin />
            }
        </div>
    )
}