import { configureStore } from '@reduxjs/toolkit'
import storeReducer from '../../tcg-store/reducer/StoreSlice'

export default configureStore({
  reducer: {
    store: storeReducer,
  },
})