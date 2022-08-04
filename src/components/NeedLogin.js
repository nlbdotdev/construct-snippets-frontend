import React from 'react'
import { Text, Paper, Group, Button, Divider, Stack, Box } from '@mantine/core';

// Add button to log in page
// Add home button page

export default function NeedLogin() {
    return (
        <Box sx={{ maxWidth: 576 }} mx="auto" style={{ position: 'relative' }}>
            <Paper radius="md" p="xl" shadow='md' withBorder >
                <Stack>
                    <Text>You must be logged in to access this page.</Text>
                    <Group position="center" mt="sm" spacing="xl">
                        <a href="/authentication"><Button>Ok, login</Button></a>
                        <a href="/"><Button>Take me home, country roads</Button></a>
                    </Group>
                </Stack>
            </Paper>
        </Box>
    )
}
