import React from 'react'
import ContentNotLogged from "./sidebarContent/sidebarNotLogged"
import ContentLogged from "./sidebarContent/sidebarLogged"
import styles from "../styles/sidebar.module.css"
import API from "../api/index"
import { loggUser } from "../redux/action-creators/login"
import { useDispatch } from 'react-redux'

const Sidebar = ({ logged }) => {

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
      <ContentLogged user={logged}/>

    }
   <button onClick={handleLogout}>asd</button>
    </div>
  )
}

export default Sidebar
