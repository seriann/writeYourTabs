import React, { useState, useEffect } from 'react'
import PaginationComponent from '../components/paginationComponent'
import  { Redirect } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import styles from '../styles/pagination.module.css'

const PaginationContainer = ({page, redirect,obj}) => {

 const history = useHistory();
 const [pages, setPages] = useState([[0],[0],[0]])
 const [ind, setind] = useState(0)
 const [jnd, setjnd] = useState(0)
 const [currentPage, setCurrentPage] = useState(1);

 const [pageNumberLimit, setpageNumberLimit] = useState(5)
 const [maxPageLimit, setMaxPageLimit] = useState(5);
 const [minPageLimit, setMinPageLimit] = useState(0);

 useEffect(()=>{
   setCurrentPage(page.now)
   let pagesArr = [];
  for (let i = 1; i <= page.total; i++) {
    pagesArr.push(i);
  }
pagesArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
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

    for (let i = 0; i < newPagesArr.length-1; i++) {
      for (let j = 0; j < newPagesArr[i].length; j++) {
        if(page.now == newPagesArr[i][j]){
          setind(i)
          setjnd(j)

        }
      }
    }
console.log("pagess",pages);
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

 const renderPageNumbers = pages[ind].map((el) =>{
   if (el < maxPageLimit + 1 && el > minPageLimit){
   console.log(el);
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
