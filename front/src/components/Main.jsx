import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from "../containers/HomeContainer"
import MyTabs from "../containers/MyTabsContainer"
import TabCreator from "../containers/TabCreatorContainer"
import Navbar from '../containers/NavbarContainer'

const Main = () => {
  return (
    <div>
     <Navbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/mytabs" component={MyTabs} />
        <Route path="/createtab" component={TabCreator} />
        <Redirect from="/" to="/home"/>
      </Switch>
    </div>
  )
}

export default Main
