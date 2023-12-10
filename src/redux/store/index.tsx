import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../reducers/AuthReducer'
import CartReducer from '../reducers/CartReducer'


export default configureStore({
  reducer: {
    AuthReducer,
    CartReducer
  },
})