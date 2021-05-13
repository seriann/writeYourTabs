import { SET_TABS } from "../constants"
import API from "../../api/index"

const setTabs = (tabs) => ({
  type: SET_TABS,
  payload: tabs
})
