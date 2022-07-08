import { Group, Container, ThemeIcon, useMantineTheme } from '@mantine/core'
import React from 'react'

// ++ Aside content should be sticky on desktop

// Should accept props for main and aside
// Needs to be responsive for mobile, display aside on top
export default function TabPage(props) {

    const { main, aside } = props


    const theme = useMantineTheme()

    return (

        <Group height= '1020px' align="flex-start">
            <div style={{flex: 2}}>{main}</div>
            <div style={{flex: 1,  background: theme.colors.gray[3]}}>{aside}</div>
        </Group>

    )
}
