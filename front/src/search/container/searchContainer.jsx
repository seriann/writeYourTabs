import React,{useState, useEffect} from 'react'
import Search from '../components/search'
import API from '../../api/index'

const SearchContainer = ({name}) => {

const [searchFor,setSearchfor] = useState("title")
const [page, setPage] = useState(1)
const [results, setResults] = useState([])

  useEffect(()=>{
    console.log("paso");
    API.get(`/tabs/v/search?for=${searchFor}&param=${name}&page=${page}`)
       .then(res => res.data)
       .then(data => setResults(data.results))
       .catch(err => console.log("ups",err))
  },[name])

const handleChange = (e) => {
  const {value} = e.target
  API.get(`/tabs/v/search?for=${value}&param=${name}&page=${1}`)
     .then(res => res.data)
     .then(data => setResults(data.results))
     .catch(err => console.log("ups",err))
}

  return <Search handleChange={handleChange} results={results} params={name} searchFor={searchFor}/>
}

export default SearchContainer
