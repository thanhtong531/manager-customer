import { Button, Form, Input, Space } from 'antd'
import React from 'react'
import { useAppDispatch } from '../../store/hooks'
import axios from 'axios'
import { admin, setLogin } from './LoginSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleLogin = async (data: any) => {
    try {
      const res = await axios.post('http://apidemo.mhotel9.asia/api/login', data)
      if (res.data.result) {
        dispatch(setLogin(true))
        localStorage.setItem('token', res.data.data.access_token)
        localStorage.setItem('isLogin', 'true')
        dispatch(admin(res.data.data.user.name))
        navigate('/layout', { replace: true })
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className=' flex w-full  items-center justify-center '>
      <Form onFinish={handleLogin} className='flex h-[500px] w-[500px] flex-col justify-center  p-5'>
        <Form.Item name='email'>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item name='password'>
          <Input.Password placeholder='password' />
        </Form.Item>
        <Space className='flex items-center justify-center'>
          <Button htmlType='submit'>Login</Button>
        </Space>
      </Form>
    </div>
  )
}
