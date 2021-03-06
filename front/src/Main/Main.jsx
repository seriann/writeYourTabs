import React, { useEffect } from 'react'
import { Route, Redirect, Switch, useLocation } from 'react-router-dom';
import { useDispatch } from "react-redux";
import HomeContainer from "../Home/container/homeContainer"
import MyTabsContainer from "../myTabs/container/myTabsContainer"
import TabCreatorContainer from "../TabCreator/container/tabCreatorContainer"
import PdfViewerContainer from "../pdfViewer/container/pdfViewerContainer"
import API from "../api/index"
import Footer from '../Footer/footer'
import NavbarContainer from "../Navbar/container/NavbarContainer"
import SidebarContainer from "../sidebarContent/container/sidebarContainer"
import SearchContainer from "../search/container/searchContainer"
import { loggUser } from "../redux/action-creators/login"
import { fetchTabs } from "../redux/action-creators/tabs"
import styles from "./styles/main.module.css"
import { useQuery } from "../custom_functions/functions"
import { Worker } from '@phuocng/react-pdf-viewer';

const Main = () => {
const dispatch = useDispatch()
const query = useQuery()

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
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
      <NavbarContainer />
       <div className={styles.flexContainer}>
           <SidebarContainer />
          <div className={styles.content}>
          <Switch>
            <Route path="/home" component={HomeContainer} />
            <Route path="/mytabs" render={()=> <MyTabsContainer page={query.get("page")}/>} />
            <Route path="/create" component={TabCreatorContainer} />
            <Route path="/tab" render={()=> <PdfViewerContainer name={query.get("s")}/>} />
            <Route path="/search" render={()=> <SearchContainer name={query.get("for")} page={query.get("page")} obj={{name:query.get("for"),page:query.get("page")}} />}/>
            <Redirect from="/" to="/home"/>
          </Switch>
           </div>
          </div>
        <Footer />
      </Worker>
    </div>
  )
}

export default Main
