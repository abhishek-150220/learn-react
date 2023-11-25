import UsercontextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
function App() {
  

  return (
    <UsercontextProvider>
      <h1>context api</h1>
      <Login />
      <Profile />
    </UsercontextProvider>
  )
}

export default App
