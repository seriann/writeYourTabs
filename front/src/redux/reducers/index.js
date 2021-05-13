import { combineReducers } from "redux"
import login from "./loginReducer"
import tabs from "./tabsReducer"

export default combineReducers({
  login,
  tabs
})
