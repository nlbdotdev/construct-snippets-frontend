import React from 'react'
import { Link } from 'react-router-dom';
import {
  TextInput, PasswordInput, Text, Paper,
  Group, Button, Divider, Checkbox, Stack,
  Anchor, Box, LoadingOverlay, Alert, MediaQuery,
} from '@mantine/core';

// To add:
// Collapsable FAQ: How is this different from the assets store, etc, about, may have more in the future, like themes, or a theme builder, package manager
// Github link and attribution, kofi, partners if possible, like used by
// Top Snippets
// Stats about stuff, total users, snippets, downloads, etc

export default function Home() {
  return (
    <div>


      <Paper radius="md" p="xl" shadow='md' withBorder sx={{
        // maxWidth: 600,
        // display: 'flex',
        // alignItems: 'center',
      }}>

        <h1>Construct Snippets</h1>

        <Text align='left' my="xl">
          <strong>Construct Snippets</strong> is a (work in progress) open source library of useful functions and other code snippets for the HTML5 game engine <a href='https://www.construct.net/' target='new'> Construct 3</a>.
        </Text>

        <Text align='left' my="xl">
          The intented use case is to save developers time performing repetitive tasks and project scaffolding by building a repository of commonly used functions for 2D games. Additionally, to discuss and improve game development patterns and best practices. It is comparable to lodash or npm for javascript.
        </Text>

        <Text align='left' my="xl">
          {/* Built with <a href='https://v4.mantine.dev/'>Mantine 4.2.12 </a>, <a href="https://reactjs.org/">React</a> */}
          View on Github: <a href='https://github.com/ReflextionsDev/construct-snippets-frontend' target='new'>(Web)</a> <a href='https://github.com/ReflextionsDev/construct-snippets-backend' target='new'>(Server)</a>
        </Text>



        <Group position="center" my="lg">
          <Anchor component={Link} to='/authentication'>
            <Button>Login</Button>
          </Anchor>
          or
          <Anchor component={Link} to='/snippets'>
            <Button>View All Snippets</Button>
          </Anchor>
        </Group>





      </Paper>

    </div>
  )
}
