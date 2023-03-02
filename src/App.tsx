import './App.css'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import Header from './layouts/Header/Header'
import Customer from './layouts'
import Login from './pages/Login'
import { useAppSelector } from './store/hooks'
import { useEffect, useState } from 'react'

function App() {
  const navigate = useNavigate()
  const isLogin = localStorage.getItem('isLogin') || null
  useEffect(() => {
    if (!isLogin) {
      navigate('/')
    } else {
      navigate('/layout')
    }
    // isLogin === 'true' ? <Navigate to='/layout' /> : <Navigate to='/' />
  }, [isLogin])
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/layout' element={<Customer></Customer>}></Route>
      </Routes>
    </div>
  )
}

export default App
