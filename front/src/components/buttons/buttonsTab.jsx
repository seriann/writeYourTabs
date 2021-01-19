import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../../styles/buttonTab.module.css"

const ButtonTab = () => {
const [home,setHome] = useState(true)
const [tab,setTab] = useState(false)
const [create,setCreate] = useState(false)

const handleClick = (e) => {
  const { title } = e.target
  if(title == "home"){
    setHome(true)
    setTab(false)
    setCreate(false)
  }else if(title == "mytabs"){
    setTab(true)
    setHome(false)
    setCreate(false)
  }else {
    setCreate(true)
    setTab(false)
    setHome(false)
  }
}

  return (
    <div>
       <button
        onClick={handleClick}
        className={home? styles.activeButton : styles.buttons}
        title="home"
        ><Link to="/home">Home</Link></button>
      <button
       onClick={handleClick}
       className={tab? styles.activeButton : styles.buttons}
       title="mytabs"
       ><Link to="/mytabs">MyTabs</Link></button>
      <button
      onClick={handleClick}
      className={create? styles.activeButton : styles.buttons}
      title="create"
      > <Link to="/create">Create Tab</Link></button>
    </div>
  )
}

export default ButtonTab
