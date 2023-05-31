import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <Routes>
        <Route path="/" index element={<News />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
