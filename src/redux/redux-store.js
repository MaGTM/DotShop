import {applyMiddleware, combineReducers, createStore} from "redux";
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from "redux-thunk";
import accountReducer from "./accountReducer";
import loadingReducer from "./loadingReducer";
import appReducer from "./appReducer";


let Reducers = combineReducers({
    accountReducer,
    loadingReducer,
    appReducer,
    form: formReducer,
})

let store = createStore(Reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store