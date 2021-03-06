import React,{ useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from "./styles/buttonTab.module.css"
import { useSpring, animated } from 'react-spring'

const ButtonTab = () => {

const [home,setHome] = useState(true)
const [tab,setTab] = useState(false)
const [create,setCreate] = useState(false)
const location = useLocation()
const props = useSpring({
    to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
  })

useEffect(()=>{
  const { pathname } = location
  if(pathname == "/home"){
    setHome(true)
    setTab(false)
    setCreate(false)
  }else if(pathname == "/mytabs"){
    setTab(true)
    setHome(false)
    setCreate(false)
  }else if(pathname == "/create"){
    setCreate(true)
    setTab(false)
    setHome(false)
  }else{
    setCreate(false)
    setTab(false)
    setHome(false)
  }
},[location.pathname])


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
    <animated.div style={props}>
     <div className={styles.container}>
        <Link
        title="home"
        onClick={handleClick}
        className={home? styles.activeButton : styles.buttons}
        to="/home">
        Home
        </Link>
        <Link
         onClick={handleClick}
         title="mytabs"
         className={tab? styles.activeButton : styles.buttons}
         to="/mytabs?page=1">
         MyTabs
         </Link>
        <Link onClick={handleClick}
         title="create"
         className={create? styles.activeButton : styles.buttons}
         to="/create">
         Create Tab
         </Link>
      </div>
    </animated.div>
  )
}

export default ButtonTab
