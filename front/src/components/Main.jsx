import React, { useEffect } from 'react'
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import Home from "../containers/HomeContainer"
import MyTabs from "../containers/myTabsContainer"
import TabCreator from "../containers/tabCreatorContainer"
import API from "../api/index"
import Footer from './footer'
import Navbar from "../containers/NavbarContainer"
import SidebarContainer from "./sidebarContent/container/sidebarContainer"
import { loggUser } from "../redux/action-creators/login"
import { fetchTabs } from "../redux/action-creators/tabs"
import styles from "../styles/main.module.css"

const Main = () => {
const dispatch = useDispatch()
const logged = useSelector((state) => {
  return state.login.loggedUser
})

useEffect(()=>{
  API.get("/users/persist/me")
     .then(res => res.data)
     .then(data => {
       console.log("user logged:", data);
       dispatch(loggUser(data))
       dispatch(fetchTabs(data._id))
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
          <Route path="/create" render={()=> <TabCreator logged={logged} />} />
          <Redirect from="/" to="/home"/>
        </Switch>
         </div>
        </div>
        <Footer />
    </div>
  )
}

export default Main
