import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AuthExample from './AuthExample'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthExample/>
    </>
  )
}

export default App
