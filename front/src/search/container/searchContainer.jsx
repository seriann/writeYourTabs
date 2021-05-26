import React,{useState, useEffect} from 'react'
import Search from '../components/search'
import API from '../../api/index'

const SearchContainer = ({name}) => {

const [searchFor,setSearchfor] = useState("title")
const [boolTabs, setboolTabs] = useState(true)
const [page, setPage] = useState(1)
const [results, setResults] = useState([])
const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    setboolTabs(true)
    setResults([])
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
           console.log("aver user:",data);
           setResults(data.results)
          }
         })
         .catch(err => {
           console.log("ups",err)
           setIsLoading(false)
         })

    }else if(strArr[0] !== "@"){
    API.get(`/tabs/v/search?for=${searchFor}&param=${name}&page=${page}`)
       .then(res => res.data)
       .then(data => {
         setIsLoading(false)
         if(isMounted){

         console.log("aver tabs:",data);
         setResults(data.results)
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
          isLoading={isLoading}
          handleChange={handleChange}
          results={results}
          params={name}
          searchFor={searchFor}
          boolTabs={boolTabs}
          />
}

export default SearchContainer
