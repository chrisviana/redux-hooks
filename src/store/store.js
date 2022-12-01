import { configureStore, combineReducers } from '@reduxjs/toolkit'
import usuarioReducer from './Usuario/usuario.reducer'

const rootReducer = combineReducers({
    usuario: usuarioReducer
})

const store = configureStore(rootReducer)
export default store
