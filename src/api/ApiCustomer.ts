import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getCustomers, searchCustomer } from '../pages/Customer/customerSlice'
export const getCustomerList = createAsyncThunk('customer/getList', async (_, thunkAPI) => {
  const res = await axios.get(
    'http://apidemo.mhotel9.asia/api/customer?customer_categories_id&customer_type_id=&department_id=1&gender&identity&name&nation&page',
    {
      headers: {
        Authorization: 'Bearer 2659|oj5xRnQoTwk0ROc4tmfzAQNIA0VcvwWncDykr65F'
      }
    }
  )
  thunkAPI.dispatch(getCustomers(res.data.data))
})

export const searchCustomers = createAsyncThunk('customer/Search', async (data: any, thunkAPI) => {
  const name = data?.name || ''
  const customertype = data?.customer_type_id || ''
  const gender_id = data?.gender_id || ''
  const res = await axios.get(
    `http://apidemo.mhotel9.asia/api/customer?customer_categories_id&customer_type_id=${customertype}&department_id=1&gender=${gender_id}&identity&name=${name}&nation&page=1`,
    {
      headers: {
        Authorization: 'Bearer 2659|oj5xRnQoTwk0ROc4tmfzAQNIA0VcvwWncDykr65F'
      }
    }
  )
  //   console.log(res)
  thunkAPI.dispatch(searchCustomer(res.data.data))
})
