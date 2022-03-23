import { configureStore, createSlice } from '@reduxjs/toolkit'

const prestaSlice = createSlice({
    name: 'presta',
    initialState: '',
    reducers: {
        updatePresta: (state, action) => {
            state = action.payload
            return state
        }
    }
})

export const {updatePresta} = prestaSlice.actions;

export const store = configureStore({
    reducer: {
        presta: prestaSlice.reducer
    }
})