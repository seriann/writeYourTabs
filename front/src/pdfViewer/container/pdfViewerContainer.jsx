import React, {useEffect, useState} from 'react'
import Pdf from '../components/pdfViewer'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import API from '../../api/index'
import Loader from '../../Loader/Loader'
import styles from '../styles/index.module.css'

const PVC = ({name, link}) => {
  const location = queryString.parse(useLocation().search)
  const [tab, setTab] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
   API.get(`/tabs/${location.s}`)
      .then(res => res.data)
      .then(data=> {
        setTab(data)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        console.log("err",err)
      })
  },[])
  return <>
           {
             isLoading?
             <div className={styles.loader}>
               <Loader/>
             </div>
             :
             <Pdf tab={tab}/>
           }

         </>
}
 export default PVC
