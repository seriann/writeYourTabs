import React, { useEffect } from 'react'
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Home from "../containers/HomeContainer"
import MyTabs from "../containers/MyTabsContainer"
import TabCreator from "../containers/TabCreatorContainer"
import API from "../api/index"
import Footer from './footer'
import Navbar from "../containers/NavbarContainer"
import SidebarContainer from "../containers/sidebarContainer"
import { loggUser } from "../redux/action-creators/login"
import styles from "../styles/main.module.css"

const Main = () => {
const dispatch = useDispatch()

useEffect(()=>{
  API.get("/users/persist/me")
     .then(res => res.data)
     .then(data => {
       console.log("user logged:", data);
       dispatch(loggUser(data))
     })
     .catch(err => console.log("ups", err))
},[])

  return (
    <div>
    <Navbar />
     <div className={styles.flexContainer}>
         <SidebarContainer />
        <div className={styles.content}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/mytabs" component={MyTabs} />
          <Route path="/create" component={TabCreator} />
          <Redirect from="/" to="/home"/>
        </Switch>
         </div>
        </div>
        <Footer />
    </div>
  )
}

export default Main
