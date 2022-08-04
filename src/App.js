// Context
import UserProvider from "./context/userContext";
import AppProvider from "./context/appContext";
import { MantineProvider, AppShell, Text } from '@mantine/core'


// Components
import Shell from "./components/Shell";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";




function App() {


// On page refresh, check if token is still valid
// If not, clear local storage and state

  // First Log In
  useEffect(() => {
    console.log('use effect')
  
  }, [])


  return (
    <Router>
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
    </Router>
  )
}

export default App;