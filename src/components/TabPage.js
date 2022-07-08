import { Group, Container, ThemeIcon, useMantineTheme, Stack, MediaQuery } from '@mantine/core'
import React from 'react'

// ++ Aside content should be sticky on desktop

// Tab Page is a responsive page composed of main content, and an aside, which are passed in as props.
// It's designed to be modular for displaying snippets content: main consisting of a content grid, and the aside being information or filter parameters 
export default function TabPage(props) {

    const { main, aside } = props
    const theme = useMantineTheme()

    return (
        <div>
            {/* Large Display */}
            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                <Group align="flex-start">
                    <div style={{ flex: 2 }}>{main}</div>
                    <div style={{ flex: 1 }}>{aside}</div>
                </Group>
            </MediaQuery>

            {/* Mobile Display */}
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Stack py='md'>
                    {aside}
                    {main}
                </Stack>
            </MediaQuery>
        </div>
    )
}
