import React from 'react'
import { Text, Paper, Group, Button, Divider, Stack, Box } from '@mantine/core';


// Add button to log in page
export default function NeedLogin() {
    return (
        <Box sx={{ maxWidth: 576 }} mx="auto" style={{ position: 'relative' }}>
            <Paper radius="md" p="xl" shadow='md' withBorder >
                <Text>You must be logged in to access this page.</Text>
            </Paper>
        </Box>
    )
}
