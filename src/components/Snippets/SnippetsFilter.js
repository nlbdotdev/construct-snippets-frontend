import { Paper, Text, useMantineTheme, Input } from '@mantine/core'
import React from 'react'


export default function SnippetsFilter() {
    
const theme = useMantineTheme()


    return (
        <Paper shadow="sm" p="md" style={{ background: theme.colors.gray[3]}}>
            Snippets Filter
            <Text>Paper is the most basic ui component</Text>
            <Text>
                Use it to create cards, dropdowns, modals and other components that require background
                with shadow
            </Text>
            <Input/>
        </Paper>
    )
}
