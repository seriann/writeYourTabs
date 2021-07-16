import React, { useState, useEffect } from 'react'
import PaginationComponent from '../components/paginationComponent'
import { convertPagesToArray } from '../../custom_functions/functions'
import  { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import styles from '../styles/pagination.module.css'

const PaginationContainer = ({page, redirect,obj, noParams}) => {

 const history = useHistory();
 const [pages, setPages] = useState([[],[],[]])
 const [ind, setind] = useState(0)
 const [jnd, setjnd] = useState(0)
 const [currentPage, setCurrentPage] = useState(1);
 const [indexOfUltimateStack,setIndex] = useState(0)

 const [pageNumberLimit, setpageNumberLimit] = useState(5)
 const [maxPageLimit, setMaxPageLimit] = useState(5);
 const [minPageLimit, setMinPageLimit] = useState(0);

 useEffect(()=>{
   setCurrentPage(page.now)
  let pagesArr = convertPagesToArray(page.total)

  let newPagesArr = []
  let arrCounter = pagesArr.length / pageNumberLimit
  let i = 0
  let j = pageNumberLimit
  while (arrCounter >= 0) {
    newPagesArr.push(pagesArr.slice(i,j))
    i+= pageNumberLimit
    j+= pageNumberLimit
    arrCounter--
  }
  newPagesArr = newPagesArr.filter((el)=> el.length != 0)
  setPages(newPagesArr)
    for (let i = 0; i < newPagesArr.length; i++) {
      for (let j = 0; j < newPagesArr[i].length; j++) {
        if(page.now == newPagesArr[i][j]){
          setind(i)
          setjnd(j)
        }
        if(page.total == newPagesArr[i][j]){
          setIndex(i)
        }
      }
    }
 },[obj])

 const handleClick = (e) => {
   const {id} = e.target
   if(noParams === true){
     history.push(`${redirect}?page=${id}`)
   }else{
     history.push(`${redirect}&page=${id}`)
   }

 }
const handleNext = () => {
  let next = parseInt(currentPage) + 1
  if(noParams === true){
    if(currentPage < page.total)history.push(`${redirect}?page=${next}`)
  }else{
    if(currentPage < page.total)history.push(`${redirect}&page=${next}`)
  }
}
const handlePrevious = () => {
  if(noParams === true){
    if(currentPage > 1)history.push(`${redirect}?page=${currentPage-1}`)
  }else{
    if(currentPage > 1)history.push(`${redirect}&page=${currentPage-1}`)
  }
}
const handleLast = () => {
  if(noParams === true){
  if(currentPage < page.total)history.push(`${redirect}?page=${page.total}`)
  }else{
  if(currentPage < page.total)history.push(`${redirect}&page=${page.total}`)
  }
}
const handleFirst = () => {
  if(noParams === true){
    if(currentPage > 1) history.push(`${redirect}?page=1`)
  }else{
    if(currentPage > 1) history.push(`${redirect}&page=1`)
  }
}
const showNextStack = () => {
  setind(ind+1)
}
const showPrevStack = () => {
  setind(ind-1)
}
 const renderPageNumbers = pages[ind] != undefined?pages[ind].map((el) =>{
//   if (el < maxPageLimit + 1 && el > minPageLimit){
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
// }else{
//   return null;
// }
}):null

  return <PaginationComponent
          showNextStack={showNextStack}
          handleLast={handleLast}
          handleFirst={handleFirst}
          ind={ind}
          jnd={jnd}
          indexOfUltimateStack={indexOfUltimateStack}
          showPrevStack={showPrevStack}
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
