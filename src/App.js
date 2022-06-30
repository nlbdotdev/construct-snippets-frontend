// Context
import UserProvider from "./context/userContext";
import AppProvider from "./context/appContext";
import { MantineProvider, AppShell } from '@mantine/core'

// Components
import NavbarContent from "./components/NavbarContent";
import HeaderContent from "./components/HeaderContent";
import Content from "./components/Content";
import Shell from "./components/Shell";

function App() {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        // fontFamily: 'Open Sans, sans serif',
        // spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        // colorScheme: 'dark'
      }}
    >
      <AppProvider>
        <UserProvider>
        <Shell/>
          {/* <AppShell
            padding="md"
            navbar={<NavbarContent />}
            header={<HeaderContent />}
            styles={(theme) => ({
              main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
            })}
          >
            <Content />
          </AppShell> */}
        </UserProvider>
      </AppProvider>
    </MantineProvider>
  )
}

export default App;