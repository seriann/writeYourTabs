import React,{ useState } from 'react'
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
        >Home</button>
      <button
       onClick={handleClick}
       className={tab? styles.activeButton : styles.buttons}
       title="mytabs"
       >MyTabs</button>
      <button
      onClick={handleClick}
      className={create? styles.activeButton : styles.buttons}
      title="create"
      >Create Tab</button>
    </div>
  )
}

export default ButtonTab
