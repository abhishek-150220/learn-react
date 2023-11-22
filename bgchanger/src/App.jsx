import { useState } from 'react'
import Bgchange from './components/Bgchange'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>hello</h1>
      <Bgchange/>
    </>
  )
}

export default App
