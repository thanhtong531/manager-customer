import React, { useEffect, useRef, useState } from 'react'
import { Table, Space, Button, Modal, Form, Input, Select } from 'antd'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { getCustomerList } from '../../api/ApiCustomer'
import { ColumnsType } from 'antd/es/table'
import { Option } from 'antd/es/mentions'
import { startEdit } from '../../pages/Customer/customerSlice'
import { FormInstance } from 'rc-field-form'
import ModalUpdate from '../../ModalUpdate/ModalUpdate'
interface DataType {
  // key: React.Key
  id: string
  name: string
  date_of_birth: string
  customertype: string
  gender_id: any
}
const initState: DataType = {
  id: '',
  name: '',
  date_of_birth: '',
  customertype: '',
  gender_id: null
}
export default function Content() {
  const formRef = useRef<FormInstance>(null)
  const { Column, ColumnGroup } = Table
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isModalOpenAdd, setIsModalOpenAdd] = useState(false)
  const [edit, setEdit] = useState(initState)
  const showModal = () => {
    setIsModalOpen(true)
  }
  const showModalAdd = () => {
    setIsModalOpenAdd(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }
  const handleDelete = (record: any) => {
    console.log(record)
  }
  const handleEdit = (record: any) => {
    setEdit(record)
    setIsModalOpen(true)
  }
  const dispatch = useAppDispatch()
  const handleUpdate = (value: any) => {
    console.log(value)
  }
  useEffect(() => {
    dispatch(getCustomerList())
  }, [dispatch])

  const genderName = [
    {
      label: 'Nam',
      id: '0'
    },
    {
      label: 'Nữ',
      id: '1'
    }
  ]
  const columns: ColumnsType<DataType> = [
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Nam Sinh',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth'
    },
    {
      title: 'Loại khách hàng',
      dataIndex: 'customertype',
      key: 'customertype'
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender_name',
      key: 'gender_name'
    },
    {
      title: 'Chức năng',
      dataIndex: 'action',
      key: 'action',
      render: (_: any, record: any) => (
        <Space>
          <Button onClick={() => handleDelete(record)}>Xoá</Button>
          <Button onClick={() => handleEdit(record)}>Chỉnh sửa</Button>
          {isModalOpen && <ModalUpdate handleCancel={handleCancel} edit={edit} isModalOpen={isModalOpen}></ModalUpdate>}
        </Space>
      )
    }
  ]
  const customerList = useAppSelector((state) => state.customers.customers)
  return (
    <>
      <Space>
        <Button className='ml-5 mb-5 bg-blue-500 text-white' onClick={showModalAdd}>
          Thêm
        </Button>
      </Space>
      <Table dataSource={customerList} columns={columns} />
    </>
  )
}
