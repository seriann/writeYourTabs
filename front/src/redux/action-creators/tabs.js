import { SET_MY_TABS } from "../constants"
import API from "../../api/index"

const setTabs = (tabs) => ({
  type: SET_MY_TABS,
  payload: tabs
})

const fetchTabs = (userId) => (dispatch) => {
  API.get(`/tabs/sf/${userId}`)
     .then(res => res.data)
     .then(data => dispatch(setTabs(data)))
     .catch(err => err)
}

export { fetchTabs, setTabs }
