import React, { useState, useEffect } from 'react'
import PaginationComponent from '../components/paginationComponent'
import  { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import styles from '../styles/pagination.module.css'

const PaginationContainer = ({page, redirect,obj}) => {

 const history = useHistory();
 const [pages, setPages] = useState([])
 const [rowArr, setRowArr] = useState(0)
 const [currentPage, setCurrentPage] = useState(1);

 const [pageNumberLimit, setpageNumberLimit] = useState(5)
 const [maxPageLimit, setMaxPageLimit] = useState(5);
 const [minPageLimit, setMinPageLimit] = useState(0);

 useEffect(()=>{
   console.log("page",page);
   setCurrentPage(page.now)
   const pagesArr = [];
  for (let i = 1; i <= page.total; i++) {
    pagesArr.push(i);
  }
   setPages(pagesArr)
 },[obj])

 const handleClick = (e) => {
   const {id} = e.target
   console.log("id", typeof id);
     history.push(`${redirect}&page=${id}`)
 }
const handleNext = () => {
  if(currentPage < page.total)history.push(`${redirect}&page=${currentPage+1}`)
}
const handlePrevious = () => {
  if(currentPage > 1)history.push(`${redirect}&page=${currentPage-1}`)
}

 const renderPageNumbers = pages.map((el) =>{
   if (el < maxPageLimit + 1 && el > minPageLimit){
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
 }else{
   return null;
 }
 })

  return <PaginationComponent
          maxPageLimit={maxPageLimit}
          currentPage={currentPage}
          handleClick={handleClick}
          renderPageNumbers={renderPageNumbers}
          pages={pages}
          handleNext={handleNext}
          handlePrevious={handlePrevious}
          />
}
export default PaginationContainer
