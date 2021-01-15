import React,{ useEffect } from 'react'
import Sidebar from "../components/sidebar.jsx"
import { useSelector } from 'react-redux'

const SidebarContainer = () => {
  const logged = useSelector((state) => {
    return state.login.loggedUser
  })

  return(
   <Sidebar logged={logged}/>
  )
}

export default SidebarContainer
