import React, {useEffect, useState} from 'react'
import Pdf from '../components/pdfViewer'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import API from '../../api/index'

const PVC = ({name, link}) => {
  const location = queryString.parse(useLocation().search)
  const [tab, setTab] = useState({})

  useEffect(()=>{
   API.get(`/tabs/${location.s}`)
      .then(res => res.data)
      .then(data=> {
        setTab(data)
      })
      .catch(err => console.log("err",err))
  },[])
  return <Pdf tab={tab}/>
}
 export default PVC
