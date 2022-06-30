import { Header } from '@mantine/core'
// import React from 'react'
import React, { useState } from 'react';
import {


    Text,
    MediaQuery,
    Burger,  useMantineTheme,
} from '@mantine/core';

export default function HeaderContent() {

    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);


    return (
        <Header height={70} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>

                <Text>Application header</Text>
            </div>
        </Header>
    )
}
