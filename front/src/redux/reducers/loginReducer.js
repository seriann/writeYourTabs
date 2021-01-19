import { IS_LOGGED } from "../constants"
const initialState = {
  loggedUser: {}
}
 export default (state = initialState, { type, payload }) => {
   switch (type) {
     case IS_LOGGED:
       return {...state, loggedUser: payload}
     default:
    return state
   }
 }
