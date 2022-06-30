import React, { useState } from 'react';
import {
  AppShell,
  Navbar,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
} from '@mantine/core';

import NavbarContent from './NavbarContent';
import HeaderContent from './HeaderContent';
import Content from './Content';

export default function Shell() {
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

        <NavbarContent opened={opened}/>
      }

      // HEADER - converts to burger that opens navbar when too small
      header={
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
            <HeaderContent />
          </div>
        </Header>
      }
    >
      <Content />
    </AppShell>
  );
}