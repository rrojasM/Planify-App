import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import userSlice from './user'

export default configureStore({
    reducer: {
        user: userSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
})