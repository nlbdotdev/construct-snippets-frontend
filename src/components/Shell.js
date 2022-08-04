// Core
import React, { useState, useEffect } from 'react';
import { AppShell, Header, MediaQuery, Burger, useMantineTheme, } from '@mantine/core';

// Content
import NavbarContent from './NavbarContent';
import HeaderContent from './HeaderContent';
import Content from './Content';

// Sesion
import axiosAPI from "../util/axiosAPI";
import { useUser } from '../context/userContext';

export default function Shell() {

  // If current session is invalid, reset react states managed by local storage
  let { loggedIn, resetUser } = useUser()
  async function validateSession() {
    // Check if user session cookie is valid
    const session = await
      axiosAPI.get('users/auth')
        .then(response => {
          if (response.status === 200) {
            // console.log('SUCCESS: ', response.data)
            return true;
          } else {
            // console.log('Auth Error')
            return false;
          }
        })
        .catch(error => {
          // console.log('Auth Error:', error)
          return false;
        })

    // Reset localStorage and userContext
    // console.log('session', session)
    if (!session && loggedIn) {
      localStorage.clear()
      resetUser()
    }

  }
  // Only check on page refresh
  useEffect(() => {
    validateSession()
  }, [])

  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell

      // STYLING
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      fixed

      // NAVBAR - Hidden when too small, unless header burger clicked, then fills page
      navbar={
        <NavbarContent opened={opened} />
      }

      // HEADER - converts to burger that opens navbar when too small
      header={
        <Header height={60} p="md" sx={(theme) => ({
          backgroundColor: theme.colors[theme.primaryColor][7],
          borderWidth: 0,
        })}>
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
            <HeaderContent />
          </div>
        </Header>
      }
    >
      <Content />
    </AppShell>
  );
}