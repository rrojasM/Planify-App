import { createSlice } from '@reduxjs/toolkit'

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        data: null
    },
    reducers: {
        setTasks: (state, action) => {
            state.data = action.payload
        },
    },
})

export const { setTasks } = tasksSlice.actions

export default tasksSlice.reducer