import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from "../containers/HomeContainer"
import MyTabs from "../containers/MyTabsContainer"
import TabCreator from "../containers/TabCreatorContainer"
import Navbar from '../containers/NavbarContainer'
import Sidebar from '../containers/SidebarContainer'
import Footer from './footer'
import styles from "../styles/main.module.css"

const Main = () => {
  return (
    <div>
     <Navbar />
     <div className={styles.flexContainer}>
       <Sidebar />
        <div className={styles.content}>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/mytabs" component={MyTabs} />
          <Route path="/createtab" component={TabCreator} />
          <Redirect from="/" to="/home"/>
        </Switch>
         </div>
        </div>
        <Footer />
    </div>
  )
}

export default Main
