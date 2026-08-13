import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Checkout from './pages/Checkout'
import Navbar from './components/Navbar'
import AuthProvider from './contexts/AuthContext'
function App() {
 
  return (
    <div className='app'>
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Auth' element={<Auth/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
      </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
