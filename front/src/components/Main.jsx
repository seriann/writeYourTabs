import React, { useEffect } from 'react'
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import HomeContainer from "./Home/container/homeContainer"
import MyTabsContainer from "./myTabs/container/myTabsContainer"
import TabCreatorContainer from "./TabCreator/container/tabCreatorContainer"
import API from "../api/index"
import Footer from './Footer/footer'
import NavbarContainer from "./Navbar/container/NavbarContainer"
import SidebarContainer from "./sidebarContent/container/sidebarContainer"
import { loggUser } from "../redux/action-creators/login"
import { fetchTabs } from "../redux/action-creators/tabs"
import styles from "../styles/main.module.css"

const Main = () => {
const dispatch = useDispatch()

useEffect(()=>{
  API.get("/users/persist/me")
     .then(res => res.data)
     .then(data => {
       dispatch(loggUser(data))
       dispatch(fetchTabs(data._id))
     })
     .catch(err => console.log("ups", err))
},[])

  return (
    <div>
    <NavbarContainer />
     <div className={styles.flexContainer}>
         <SidebarContainer />
        <div className={styles.content}>
        <Switch>
          <Route path="/home" component={HomeContainer} />
          <Route path="/mytabs" component={MyTabsContainer} />
          <Route path="/create" component={TabCreatorContainer} />
          <Redirect from="/" to="/home"/>
        </Switch>
         </div>
        </div>
        <Footer />
    </div>
  )
}

export default Main
