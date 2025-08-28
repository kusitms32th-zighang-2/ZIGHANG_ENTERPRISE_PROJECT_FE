import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Landing from '@/pages/Landing'
import Profile from '@/pages/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
