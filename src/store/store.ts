import { configureStore } from '@reduxjs/toolkit'
import customerSlice from '../pages/Customer/customerSlice'
import LoginSlice from '../pages/Login/LoginSlice'

export const store = configureStore({
  reducer: {
    customers: customerSlice,
    login: LoginSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
