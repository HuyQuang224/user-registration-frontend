import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="p-4 bg-white shadow">
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/signup" className="mr-4">Sign Up</Link>
        <Link to="/login">Login</Link>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </main>
    </div>
  )
}