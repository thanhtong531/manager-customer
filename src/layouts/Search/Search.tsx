import React from 'react'
import { Input, Form, Col, Button, message, Select } from 'antd'
import { useAppDispatch } from '../../store/hooks'
import { searchCustomers } from '../../api/ApiCustomer'
export default function Search() {
  const { Option } = Select
  const dispatch = useAppDispatch()
  const handleSubmit = (data: any) => {
    dispatch(searchCustomers(data))
  }
  const data = [
    {
      label: 'Khách lẻ',
      id: '1'
    },
    {
      label: 'Khách công ty',
      id: 2
    },
    {
      label: 'Khách nước ngoài',
      id: 3
    }
  ]
  const genderId = [
    {
      name: 'Nam',
      id: 1
    },
    {
      name: 'Nữ',
      id: 2
    }
  ]
  return (
    <Form className='flex flex-wrap gap-5 p-4' onFinish={handleSubmit}>
      <Col span={6}>
        <Form.Item name='name'>
          <Input placeholder='Name'></Input>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item name='customer_type_id'>
          <Select>
            {data.map((item) => (
              <Option value={item.id}>{item.label}</Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item name='gender_id'>
          <Select>
            {genderId.map((item) => (
              <Option value={item.id}>{item.name}</Option>
            ))}
          </Select>
          {/* <Input placeholder='Gioi tinh'></Input> */}
        </Form.Item>
      </Col>
      <Button htmlType='submit'>Tim</Button>
    </Form>
  )
}
