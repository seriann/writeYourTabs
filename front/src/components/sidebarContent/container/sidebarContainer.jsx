import React from 'react'
import ContentNotLogged from "../components/sidebarNotLogged"
import ContentLogged from "../components/sidebarLogged"
import styles from "../styles/sidebar.module.css"
import API from "../../../api/index"
import { loggUser } from "../../../redux/action-creators/login"
import { useSelector, useDispatch } from 'react-redux'

const Sidebar = () => {

  const logged = useSelector((state) => {
    return state.login.loggedUser
  })
  const dispatch = useDispatch()
  const handleLogout = () => {
     API.post("/users/logout")
       .then(res => res.data)
       .then(()=> dispatch(loggUser({})))
       .catch(err=> console.log(err))
  }

  return(
    <div className={styles.container}>
    {
      JSON.stringify(logged) == "{}"?
      <ContentNotLogged />
      :
      <ContentLogged user={logged} logout={handleLogout}/>

    }
    </div>
  )
}

export default Sidebar
