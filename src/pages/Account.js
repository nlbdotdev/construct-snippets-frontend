// Core
import React, { useEffect } from 'react'
import { Text, Paper, Group, Button, Divider, Stack, Box } from '@mantine/core';

// Context
import { useUser } from '../context/userContext';
import axiosAPI from '../util/axiosAPI';

// Add account verification... and via cookie modularize this
// Add an auth wrapper
// use effect > on load, check if local cookie is good
// send requst to server
// log result

let sessionValid = false;


async function validateSession() {
    axiosAPI.get('users/auth')
        .then(response => {
            if (response.status === 200) {
                console.log('SUCCESS: ', response.data)
                return true;
            } else {
                console.log('Auth Error')
                return false;
            }
        })
        .catch(error => {
            console.log('Auth Error:', error)
            return false;
        })
}


export default function Account() {



    const { loggedIn } = useUser()

    console.log(loggedIn)




    // useEffect(() => {
    //     validateSession()
    // }, [])


    sessionValid = validateSession()
    console.log('session', sessionValid)

    const { user } = useUser()

    return (



        <Box sx={{ maxWidth: 576 }} mx="auto" style={{ position: 'relative' }}>

            {sessionValid &&
                <Paper radius="md" p="xl" shadow='md' withBorder >

                    <Stack>
                        <Text size="lg" weight={500}>
                            Hello, {user.username}
                        </Text>

                        <Divider labelPosition="center" my="sm" />

                        <Text align="left">Username: {user.username}.</Text>
                        <Text align="left">Email: {user.email}</Text>

                        <Divider labelPosition="center" my="sm" />

                        <Group>
                            <Button type="submit" >Sign Out</Button>
                        </Group>
                    </Stack>
                </Paper>


            }


        </Box>


    )
}