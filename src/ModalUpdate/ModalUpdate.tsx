import { Button, Form, FormInstance, Input, Modal, Select } from 'antd'
import React, { useEffect, useRef } from 'react'

interface ModelType {
  isModalOpen: boolean
  handleCancel: () => void
  edit: any
}
export default function ModalUpdate({ isModalOpen, handleCancel, edit }: ModelType) {
  const handleUpdate = (value: any) => {
    console.log(value)
  }
  const formRef = useRef<FormInstance>(null)
  const { Option } = Select
  const genderName = [
    {
      label: 'Nam',
      id: 1
    },
    {
      label: 'Nữ',
      id: 2
    }
  ]
  useEffect(() => {
    formRef.current?.setFieldsValue({
      id: edit.id,
      name: edit.name,
      date_of_birth: edit.date_of_birth,
      gender_id: edit.gender_id,
      customertype: edit.customertype
    })
  }, [])
  return (
    <Modal title='Thêm khách hàng' open={isModalOpen} footer={[]} onCancel={handleCancel}>
      <Form onFinish={handleUpdate} ref={formRef}>
        <Form.Item name='name'>
          <Input />
        </Form.Item>
        <Form.Item name='date_of_birth'>
          <Input value={edit.date_of_birth} />
        </Form.Item>
        <Form.Item name='customertype'>
          <Input value={edit.customertype} />
        </Form.Item>
        <Form.Item name='gender_id'>
          <Select defaultValue={edit.gender_name}>
            {genderName.map((gender) => (
              <Option value={gender.id}>{gender.label}</Option>
            ))}
          </Select>
        </Form.Item>
        <Button className='text:hover-white bg:hover-blue-500 bg-blue-500 text-white' htmlType='submit'>
          Cập nhật
        </Button>
      </Form>
    </Modal>
  )
}
