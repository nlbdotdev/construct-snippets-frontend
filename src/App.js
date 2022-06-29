// Pages
import Login from "./pages/Signup";
import Signup from "./pages/Login"
// Context
import UserProvider from "./context/userContext";


import { MantineProvider } from '@mantine/core'


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
      <UserProvider>
        <div className="App">
          Hello There!
          <Login />
          <Signup />
        </div>
      </UserProvider>
    </MantineProvider>
  );
}

export default App;