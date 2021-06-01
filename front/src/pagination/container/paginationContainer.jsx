import React, { useState, useEffect } from 'react'
import PaginationComponent from '../components/paginationComponent'
import  { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import styles from '../styles/pagination.module.css'

const PaginationContainer = ({dataLength,page, redirect}) => {

 const history = useHistory();
 const [pages, setPages] = useState([])
 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage, setitemsPerPage] = useState(5);

 const [pageNumberLimit, setpageNumberLimit] = useState(5)
 const [maxPageLimit, setMaxPageLimit] = useState(5);
 const [minPageLimit, setMinPageLimit] = useState(0);

 useEffect(()=>{
   console.log("pages",page);
   setCurrentPage(page.now)
   const pagesArr = [];
  for (let i = 1; i <= Math.floor(dataLength / itemsPerPage); i++) {
    pagesArr.push(i);
  }
   setPages(pagesArr)
 },[page.total])

 const handleClick = (e) => {
   const {id} = e.target
   return <Redirect to={`${redirect}&page=${id}`} />
   //history.push(`${redirect}&page=${id}`)
 }
 const renderPageNumbers = pages.map((el) =>{
   return (
     <li
      key={el}
      id={el}
      onClick={handleClick}
      className={currentPage == el? styles.liActive : styles.li}
     >
     {el}
     </li>
   )
 })

  return <PaginationComponent
          maxPageLimit={maxPageLimit}
          handleClick={handleClick}
          renderPageNumbers={renderPageNumbers}
          page={page}
          />
}
export default PaginationContainer
