import {createStore,applyMiddleware,compose} from "redux";
import reducer from "./reducer/reducer";
import { thunk } from "redux-thunk";



const initState={}
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store= createStore(reducer,initState,enhancer(applyMiddleware(thunk)))
export default store;