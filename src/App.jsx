import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import First from './pages/First.jsx'
import Second from './pages/Second.jsx'
import Third from './pages/Third.jsx'
import Fourth from './pages/forth.jsx'  
import Yes from './pages/Yes.jsx'
import No from './pages/No.jsx'
import Last from './pages/Last.jsx'
import Lastfi from './pages/Lastfi.jsx'
import Fi from './pages/fi.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<First />} />
      <Route path="/second" element={<Second />} />
      <Route path="/third" element={<Third />} />
      <Route path="/forth" element={<Fourth />} />
      <Route path="/yes" element={<Yes />} />
      <Route path="/no" element={<No />} />
      <Route path="/last" element={<Last />} />
      <Route path="/lastfi" element={<Lastfi />} />
      <Route path="/fi" element={<Fi />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
