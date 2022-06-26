// Pages
import Login from "./pages/Signup";
import Signup from "./pages/Login"
// Context
import UserProvider from "./context/userContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        Hello There!
        <Login />
        <Signup />
      </div>
    </UserProvider>
  );
}

export default App;