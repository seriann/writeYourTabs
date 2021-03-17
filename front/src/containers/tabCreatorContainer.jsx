import React, {useState, useEffect, useRef} from 'react'
import styles from "../styles/tabCreator.module.css"
import { useSpring, animated } from 'react-spring'
import { useLocation } from 'react-router-dom'
import Tab from "../components/tabs/start"
import Line from "../components/tabs/extraLine"
import { svgPoint,createSvgText,createText, uniqid, createSeparationLine } from "../components/custom_functions/functions"
import TabsOpt from "../components/sidebarContent/TabsOpt"
import FirstStep from "../components/tabs/FirstStep"
import html2canvas from 'html2canvas';
import { jsPDF } from "jspdf";

const TabCreator = ({logged}) => {
 const location = useLocation()
 const [fretNum, setFretNum] = useState(0)
 const [linesCounter, setLinesCounter] = useState(1)
 const [idHistory, setIdHistory] = useState([])
 const [className, setClassName] = useState("")
 const [title, setTitle] = useState("")
 const [author, setAuthor] = useState("")
 const [genre, setGenre] = useState("")
 const [textArea, setTextArea] = useState("")
 const [firstString, setFirstString]= useState("e")
 const [secondString,setSecondString]= useState("B")
 const [thirdString, setThirdString]= useState("G")
 const [fourthString, setFourthString]= useState("D")
 const [fifthString, setFifthString]= useState("A")
 const [sixthString,setSixthString]= useState("E")
 const [tab, setTab] = useState(false)
 const [pdf, setPdf] = useState(null)
 const [viewBox, setViewBox] = useState("0 0 950 200")
 const input = document.getElementById('svgContainer')
 const props = useSpring({
      to: { opacity: 1, transform: 'translate3d(0%,0,0)' },
      from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    })
 const inputRef = useRef()
 const svgContainerRef = useRef()
    document.onkeydown = function (e){
     e = e || window.event;
     if ((e.which == 90 || e.keyCode == 90) && e.ctrlKey) {
         goBack()
     }
}

const handleSave = () => {
  html2canvas(svgContainerRef.current,{
                                       width:1000
                     })
                      .then(canvas => {
                        const imgData = canvas.toDataURL('image/png')
                        const newPdf = new jsPDF()

                        const imgProps= newPdf.getImageProperties(imgData);
                        const pdfWidth = newPdf.internal.pageSize.getWidth();
                        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                        newPdf.addImage(imgData, 'PNG', 0, 0,pdfWidth, pdfHeight)
                        setPdf(newPdf)
                        newPdf.save('download.pdf')
                      }).catch(err=>console.log(err))
                      console.log(pdf);
}


const goBack = () => {
  if(idHistory.length > 0){
    const toRemove = document.getElementById(idHistory[idHistory.length-1])
    toRemove.remove()
    setIdHistory(idHistory.filter(el => el !== toRemove.id))
  }
}
const handleClick = (e) => {
  e.preventDefault()
   setTab(!tab)
}
const handleQuit = () => {
  setLinesCounter(1)
  setTitle("")
  setAuthor("")
  setGenre("")
  setTextArea("")
  setTab(!tab)
}
const handleChange = (e) => {
  const { name, value } = e.target
  if(name == "fret")return setFretNum(value)
  if(name == "title")return setTitle(value)
  if(name == "author")return setAuthor(value)
  if(name == "genre")return setGenre(value)
  if(name == "textarea")return setTextArea(value)

  if(name == "firstString")return setFirstString(value)
  if(name == "secondString")return setSecondString(value)
  if(name == "thirdString")return setThirdString(value)
  if(name == "fourthString")return setFourthString(value)
  if(name == "fifthString")return setFifthString(value)
  if(name == "sixthString")return setThirdString(value)

}

const clicked = (evt) =>{  //dibuja el numero/simbolo del input con las coordenadas del mouse
  const { currentTarget: svg, pageX, pageY, clientX, clientY } = evt
  const id = uniqid()
  let svgP = svgPoint(svg, clientX, clientY)
  const txt = createText(svgP.x, Math.round(svgP.y),fretNum, id)

  /*const coords = svg.getBoundingClientRect()
  const y_rounded = Math.round(`${pageY - coords.y}`)
  const id = uniqid()
console.log("coords",coords.x,coords.y);
console.log("client",clientX,clientY);
console.log("page",pageX,pageY);
  const txt = createSvgText(clientX, clientY, coords.x, coords.y,y_rounded, fretNum, svg, id)*/
   if(txt != undefined) {
     setIdHistory([...idHistory, txt])
     inputRef.current.focus()
   }

}

                            //agrega nueva linea con espacio normal (todavia no hay otro tamaño)
const addNewLine = () => {  //a mejorar
  const svg = document.getElementById('svg')
  const strings = document.getElementsByClassName('string')
  const strings1Inf = new Array(strings[0].x2.animVal.value,strings[0].y1.animVal.value, strings[5].y1.animVal.value) // equivalente a las variables de arriba (para ahorrar espacio)
  const arr = []
  if(linesCounter < 3){
 const separationLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
       separationLine.setAttribute('x1',strings1Inf[0])
       separationLine.setAttribute('x2',strings1Inf[0])
       separationLine.setAttribute('y1',strings1Inf[1])
       separationLine.setAttribute('y2',strings1Inf[2])
       separationLine.setAttribute('stroke','grey')
       separationLine.setAttribute('stroke-width',"2")
 svg.appendChild(separationLine);

 arr.map.call(strings,(el)=> el.setAttribute('x2',`${strings1Inf[0] + 270}`))

} else if (linesCounter > 3 && linesCounter < 6) {
  setViewBox("0 0 950 300")
  let svg2 = document.getElementById('svg2')
  let strings2 = document.getElementsByClassName('string2')
  let strings2Inf = new Array(strings2[0].x2.animVal.value,strings2[0].y1.animVal.value, strings2[5].y1.animVal.value)
   createSeparationLine(strings2Inf[0],strings2Inf[1],strings2Inf[2],svg2)

  arr.map.call(strings2,(el)=> el.setAttribute('x2',`${strings2Inf[0] + 270}`))
} else if (linesCounter > 6 && linesCounter < 9){
  setViewBox("0 0 950 450")
  let svg3 = document.getElementById('svg3')
  let strings3 = document.getElementsByClassName('string3')
  let strings3Inf = new Array(strings3[0].x2.animVal.value,strings3[0].y1.animVal.value, strings3[5].y1.animVal.value)
  createSeparationLine(strings3Inf[0],strings3Inf[1],strings3Inf[2],svg3)
  arr.map.call(strings3,(el)=> el.setAttribute('x2',`${strings3Inf[0] + 270}`))
} else if (linesCounter > 9 && linesCounter < 12){
  setViewBox("0 0 950 600")
  let svg4 = document.getElementById('svg4')
  let strings4 = document.getElementsByClassName('string4')
  let strings4Inf = new Array(strings4[0].x2.animVal.value,strings4[0].y1.animVal.value, strings4[5].y1.animVal.value)
  createSeparationLine(strings4Inf[0],strings4Inf[1],strings4Inf[2],svg4)
  arr.map.call(strings4,(el)=> el.setAttribute('x2',`${strings4Inf[0] + 270}`))
}else if (linesCounter > 12 && linesCounter < 15){
  setViewBox("0 0 950 750")
  let svg5 = document.getElementById('svg5')
  let strings5 = document.getElementsByClassName('string5')
  let strings5Inf = new Array(strings5[0].x2.animVal.value,strings5[0].y1.animVal.value, strings5[5].y1.animVal.value)
  createSeparationLine(strings5Inf[0],strings5Inf[1],strings5Inf[2],svg5)
  arr.map.call(strings5,(el)=> el.setAttribute('x2',`${strings5Inf[0] + 270}`))
}else if(linesCounter > 15 && linesCounter < 18){
  setViewBox("0 0 950 900")
  let svg6 = document.getElementById('svg6')
  let string6 = document.getElementsByClassName('string6')
  let strings6Inf = new Array(string6[0].x2.animVal.value,string6[0].y1.animVal.value, string6[5].y1.animVal.value)
  createSeparationLine(strings6Inf[0],strings6Inf[1],strings6Inf[2],svg6)
  arr.map.call(string6,(el)=> el.setAttribute('x2',`${strings6Inf[0] + 270}`))
}else if(linesCounter > 18 && linesCounter < 21){
  setViewBox("0 0 950 1050")
  let svg7 = document.getElementById('svg7')
  let string7 = document.getElementsByClassName('string7')
  let strings7Inf = new Array(string7[0].x2.animVal.value,string7[0].y1.animVal.value, string7[5].y1.animVal.value)
  createSeparationLine(strings7Inf[0],strings7Inf[1],strings7Inf[2],svg7)
  arr.map.call(string7,(el)=> el.setAttribute('x2',`${strings7Inf[0] + 270}`))
}else if(linesCounter > 21 && linesCounter < 24){
  setViewBox("0 0 950 1200")
  let svg8 = document.getElementById('svg8')
  let string8 = document.getElementsByClassName('string8')
  let strings8Inf = new Array(string8[0].x2.animVal.value,string8[0].y1.animVal.value, string8[5].y1.animVal.value)
  createSeparationLine(strings8Inf[0],strings8Inf[1],strings8Inf[2],svg8)
  arr.map.call(string8,(el)=> el.setAttribute('x2',`${strings8Inf[0] + 270}`))
}else if(linesCounter > 24 && linesCounter < 27){
  setViewBox("0 0 950 1350")
  let svg9 = document.getElementById('svg9')
  let string9 = document.getElementsByClassName('string9')
  let strings9Inf = new Array(string9[0].x2.animVal.value,string9[0].y1.animVal.value, string9[5].y1.animVal.value)
  createSeparationLine(strings9Inf[0],strings9Inf[1],strings9Inf[2],svg9)
  arr.map.call(string9,(el)=> el.setAttribute('x2',`${strings9Inf[0] + 270}`))
}else if(linesCounter > 27 && linesCounter < 30){
  setViewBox("0 0 950 1500")
  let svg10 = document.getElementById('svg10')
  let string10 = document.getElementsByClassName('string10')
  let strings10Inf = new Array(string10[0].x2.animVal.value,string10[0].y1.animVal.value, string10[5].y1.animVal.value)
  createSeparationLine(strings10Inf[0],strings10Inf[1],strings10Inf[2],svg10)
  arr.map.call(string10,(el)=> el.setAttribute('x2',`${strings10Inf[0] + 270}`))
}else if(linesCounter > 30 && linesCounter < 33){
  setViewBox("0 0 950 1650")
  let svg11 = document.getElementById('svg11')
  let string11 = document.getElementsByClassName('string11')
  let strings11Inf = new Array(string11[0].x2.animVal.value,string11[0].y1.animVal.value, string11[5].y1.animVal.value)
  createSeparationLine(strings11Inf[0],strings11Inf[1],strings11Inf[2],svg11)
  arr.map.call(string11,(el)=> el.setAttribute('x2',`${strings11Inf[0] + 270}`))
}else if(linesCounter > 33 && linesCounter < 36){
  setViewBox("0 0 950 1800")
  let svg12 = document.getElementById('svg12')
  let string12 = document.getElementsByClassName('string12')
  let strings12Inf = new Array(string12[0].x2.animVal.value,string12[0].y1.animVal.value, string12[5].y1.animVal.value)
  createSeparationLine(strings12Inf[0],strings12Inf[1],strings12Inf[2],svg12)
  arr.map.call(string12,(el)=> el.setAttribute('x2',`${strings12Inf[0] + 270}`))
}
console.log(linesCounter);
setLinesCounter(linesCounter+1)

}
  return (

     <animated.div style={props} className={styles.container}>
     {
       JSON.stringify(logged) == "{}"?
       <div>primero logueate</div>
       :
       tab == false ?
       <FirstStep
        handleClick={handleClick}
        handleChange={handleChange}
        title={title}
        author={author}
        genre={genre}
        textarea={textArea}
        />
       :
       <div className={styles.sheet}>
        <button className={styles.back} onClick={handleQuit}>
          <i className="far fa-times-circle"></i>
        </button>
          <TabsOpt
           inputRef={inputRef}
           handleChange={handleChange}
           fretNum={fretNum}
           goBack={goBack}
           addNewLine={addNewLine}
           handleSave={handleSave}
           firstString={firstString}
           secondString={secondString}
           thirdString={thirdString}
           fourthString={fourthString}
           fifthString={fifthString}
           sixthString={sixthString}
          />
            <Tab
            firstString={firstString}
            secondString={secondString}
            thirdString={thirdString}
            fourthString={fourthString}
            fifthString={fifthString}
            sixthString={sixthString}
            viewBox={viewBox}
            author={author}
            title={title}
            clicked={clicked}
            counter={linesCounter}
            svgContainerRef={svgContainerRef}
            />
       </div>

     }

     </animated.div>
  )
}

export default TabCreator
