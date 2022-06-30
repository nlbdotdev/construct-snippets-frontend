// Context
import UserProvider from "./context/userContext";
import AppProvider from "./context/appContext";
import { MantineProvider, AppShell } from '@mantine/core'

// Components
import Shell from "./components/Shell";

function App() {
  return (
    <MantineProvider
      theme={{
        // Override any other properties from default theme
        // fontFamily: 'Open Sans, sans serif',
        // spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        // colorScheme: 'dark'
        primaryColor: 'cyan'
      }}
    >
      <AppProvider>
        <UserProvider>
          <Shell />
        </UserProvider>
      </AppProvider>
    </MantineProvider>
  )
}

export default App;