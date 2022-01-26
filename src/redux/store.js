import { configureStore } from '@reduxjs/toolkit'
import keyboardReducer from './keyboardSlice'
import logger from 'redux-logger'
import wordBoxReducer from './wordBoxSlice'

export default configureStore({
  reducer: {
    keyboard: keyboardReducer,
    wordBox: wordBoxReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})