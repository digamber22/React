
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider' // UserContextProvider is used to provide the context to the components globaly to use it in the components

function App() {
  

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App