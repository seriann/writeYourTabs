import React, { useState, useEffect } from 'react'
import MyTabs from "../components/myTabs"
import LoginFirst from '../../errors/LoginFirst'
import styles from '../styles/myTabs.module.css'
import { useSelector } from "react-redux";
import { useSpring, animated } from 'react-spring'
import { paginate } from '../../custom_functions/functions'

const MyTabsContainer = ({page}) => {
  const [tabsPaginated, setTabsPaginated] = useState([])

  const [result, setResults] = useState([])
  const [pages, setPages] = useState({})

  const logged = useSelector((state) => {
    return state.login.loggedUser
  })
  const myTabs = useSelector((state)=> {
    return state.tabs.myTabs
  })
  useEffect(()=>{
    console.log("asd");
     let paginated = paginate(myTabs, 8)
     setTabsPaginated(paginated)
     setResults(paginated[page-1])
     setPages({now:page,
               total:paginated.length
              })
  },[page])

  const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })

  return (
   <animated.div style={props} className={styles.container}>
    {
      JSON.stringify(logged) == "{}"?
      <LoginFirst />
      :
      <MyTabs tabs={result} page={page} pages={pages}/>
    }

   </animated.div>
 )
}

export default MyTabsContainer
