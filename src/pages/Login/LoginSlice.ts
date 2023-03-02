import { createSlice } from '@reduxjs/toolkit'

interface LoginType {
  isLogin: boolean
  isProfile: []
}

const initialState: LoginType = {
  isLogin: false,
  isProfile: []
}

export const LoginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = action.payload
    },
    admin: (state, action) => {
      state.isProfile = action.payload
    }
  }
})
export const { setLogin, admin } = LoginSlice.actions

export default LoginSlice.reducer
