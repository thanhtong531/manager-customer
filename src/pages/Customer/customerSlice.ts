import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { CustomerType } from '../../types/CustomerType'
interface customerType {
  customers: CustomerType[]
  isEdit: CustomerType | null
}

const initialState: customerType = {
  customers: [],
  isEdit: null
}

// export const getCustomerList = createAsyncThunk('customer/getList', async (_, thunkAPI) => {
//   const res = await axios.get(
//     'http://apidemo.mhotel9.asia/api/customer?customer_categories_id&customer_type_id=1&department_id=1&gender&identity&name&nation&page',
//     {
//       headers: {
//         Authorization: 'Bearer 2659|oj5xRnQoTwk0ROc4tmfzAQNIA0VcvwWncDykr65F'
//       }
//     }
//   )
//   return res.data
// })

const CustomerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    startEdit: (state, action) => {
      // const customerId = state.customers.find((item) => item.id === action.payload)
    },
    getCustomers: (state, action) => {
      state.customers = action.payload
    },
    searchCustomer: (state, action) => {
      state.customers = action.payload
    }
  }
})
export const { getCustomers, searchCustomer, startEdit } = CustomerSlice.actions
export default CustomerSlice.reducer
