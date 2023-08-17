import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isUserLogin: false,
        user: {}
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isUserLogin = true
            state.user = action.payload
        },
        loginFail: (state) => {
            state.isUserLogin = false
            state.user = {}
        },
        logout: (state) => {
            state.isUserLogin = false
            state.user = {}
        }
    }
})

export const { loginSuccess, loginFail, logout } = authSlice.actions
export default authSlice.reducer