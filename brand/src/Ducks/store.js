import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import rootReducer from "./reducer/index";
import { inCrement } from './action';
import { deCrement } from './action';
const middlewareEnhancer = applyMiddleware((thunk))
const Store = createStore(rootReducer, {}, middlewareEnhancer)

export default Store