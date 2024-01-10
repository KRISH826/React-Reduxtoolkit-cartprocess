import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-2xl text-center my-10'>Hello World</h2>
    </>
  )
}

export default App
