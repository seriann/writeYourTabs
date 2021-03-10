import React,{ useEffect } from 'react'
import Sidebar from "../components/sidebar.jsx"


const SidebarContainer = ({logged}) => {


  return(
      <Sidebar logged={logged}/>
  )
}

export default SidebarContainer
