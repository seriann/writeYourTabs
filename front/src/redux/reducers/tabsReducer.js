import { SET_MY_TABS } from "../constants"

const initialState = {
  myTabs: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_MY_TABS:
      return {...state, myTabs: payload}
    default:
      return state
  }
}
