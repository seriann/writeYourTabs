import { SET_MY_TABS,ADD_TAB } from "../constants"

const initialState = {
  myTabs: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_MY_TABS:
      return {...state, myTabs: payload}
    case ADD_TAB:
      return {...state, myTabs:[...state.myTabs, payload]}
    default:
      return state
  }
}
