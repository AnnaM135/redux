import counterReducer from "./counterReducer";
import showReducer from "./showReducer";
import { combineReducers } from "redux"

const globalState = combineReducers({
    counterReducer,
    showReducer
})

export default globalState