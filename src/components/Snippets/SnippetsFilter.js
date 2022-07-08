import { Paper, Text, useMantineTheme, TextInput, MultiSelect, Stack, Title, Button } from '@mantine/core'
import React from 'react'


export default function SnippetsFilter() {

    const theme = useMantineTheme()

    const data = [
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
        { value: 'riot', label: 'Riot' },
        { value: 'next', label: 'Next.js' },
        { value: 'blitz', label: 'Blitz.js' },
    ];


    return (
        <Paper shadow="sm" p="md" style={{ background: theme.colors.gray[3] }}>



            <Stack style={{ textAlign: 'left' }} >


                <TextInput
                    label={<Title order={5}>Search</Title>}
                    placeholder="search"
                />
                <MultiSelect
                    data={data}
                    label={<Title order={5}>Type</Title>}
                    placeholder="all"
                />
                <MultiSelect
                    data={data}
                    label={<Title order={5}>Tags</Title>}
                    placeholder="all"
                />

                <Button my="xs">Reset</Button>
            </Stack>


        </Paper>
    )
}
