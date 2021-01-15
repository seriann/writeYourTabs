import { IS_LOGGED } from "../constants"
import API from "../../api/index"

const loggUser = (user) => ({
  type: IS_LOGGED,
  payload:user
})

const fetchLogin = (email, password) => (dispatch) => {
  API.post("/users/login",{
    email,
    password
  })
  .then(res => res.data)
  .then(data => {
    console.log(`user logged ${data}`);
    dispatch(loggUser)
  })
  .catch(err => console.log(err))
}

export { fetchLogin, loggUser }
