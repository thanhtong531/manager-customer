import React, { useEffect } from 'react'
import { Navigate, useHref } from 'react-router-dom'
import { getCustomerList } from '../../api/ApiCustomer'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { useNavigate } from 'react-router-dom'
export default function Header() {
  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem('isLogin')
    navigate('/')
    // <Navigate to='/' replace={true} />
  }

  const profile = useAppSelector((state) => state.login.isProfile)
  return (
    <div className='flex gap-2'>
      <div className='name'>Name: {profile}</div>
      <div onClick={() => handleLogout()} className='cursor-pointer'>
        Logout
      </div>
    </div>
  )
}
