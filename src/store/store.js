import usuarioReducer from './Usuario/usuario.reducer'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    usuario: usuarioReducer
})
const store = configureStore({
    reducer,
})
export default store;