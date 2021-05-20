import { SET_MY_TABS, ADD_TAB } from "../constants"
import API from "../../api/index"

const setTabs = tabs => ({ type: SET_MY_TABS, payload: tabs })
const addTab = tab => ({ type: ADD_TAB, payload: tab })

const fetchTabs = (userId) => (dispatch) => {
  API.get(`/tabs/sf/${userId}`)
     .then(res => res.data)
     .then(data => dispatch(setTabs(data)))
     .catch(err => err)
}

export { fetchTabs, setTabs, addTab }
