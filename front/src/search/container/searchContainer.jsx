import React,{useState, useEffect} from 'react'
import Search from '../components/search'
import API from '../../api/index'

const SearchContainer = ({name,page}) => {
const [searchFor,setSearchfor] = useState("title")
const [boolTabs, setboolTabs] = useState(true)
const [results, setResults] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [notFound, setNotFounded] = useState(false)
const [errMsg, setErrMsg] = useState("")
const [pages, setPages] = useState({})
const [dataLength, setDataLength] = useState(0)

  useEffect(()=>{
    setboolTabs(true)
    setResults([])
    setNotFounded(false)
    setErrMsg("")
    setIsLoading(true)
    let isMounted = true;
    let strArr = name.split("")
    if(strArr[0] == "@"){
      setboolTabs(false)
      API.get(`/users/v/search?for=${name}`)
         .then(res => res.data)
         .then(data => {
           setIsLoading(false)
           if(isMounted){
             console.log("paso antes de pages");
           setResults(data.results)
           setPages(data.page)
           if(data.results.length === 0){
             setNotFounded(true)
             setErrMsg(`sorry, didn't find nothing for: "${name}"`)
           }
           setDataLength(data.results.length * data.page.total)
          }
         })
         .catch(err => {
           console.log("ups",err)
           setIsLoading(false)
         })

    }else if(strArr[0] !== "@"){
    API.get(`/tabs/v/search?for=${name}&page=${page}`)
       .then(res => res.data)
       .then(data => {
         setIsLoading(false)
         if(isMounted){
         setResults(data.results)
         setPages(data.page)
         if(data.results.length === 0){
           setNotFounded(true)
           setErrMsg(`sorry, didn't find nothing for: "${name}"`)
         }
         setDataLength(data.results.length * data.page.total)
         }
        })
       .catch(err => {
         console.log("ups",err)
         setIsLoading(false)
       })
     }
    return () => isMounted = false
  },[name])

const handleChange = (e) => {
  setboolTabs(true)
  const {value} = e.target
  setSearchfor(value)
  API.get(`/tabs/v/search?for=${value}&param=${name}&page=${1}`)
     .then(res => res.data)
     .then(data => setResults(data.results))
     .catch(err => console.log("ups",err))
}

  return <Search
          dataLength={dataLength}
          pages={pages}
          notFound={notFound}
          isLoading={isLoading}
          handleChange={handleChange}
          results={results}
          params={name}
          searchFor={searchFor}
          errMsg={errMsg}
          boolTabs={boolTabs}
          />
}

export default SearchContainer
