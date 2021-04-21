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

                          let imgWidth = 210
                          let pageHeight = 295
                          let imgHeight = canvas.height * imgWidth / canvas.width
                          let heightLeft = imgHeight
                          let position = 0

                        newPdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
                        heightLeft -= pageHeight

                        while (heightLeft >= 0) {
                          position = heightLeft - imgHeight
                          newPdf.addPage()
                          newPdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
                          heightLeft -= pageHeight

                        }
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
  if(name == "sixthString")return setSixthString(value)

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
}else if(linesCounter > 36 && linesCounter < 39){
  setViewBox("0 0 950 1950")
  let svg13 = document.getElementById('svg13')
  let string13 = document.getElementsByClassName('string13')
  let strings13Inf = new Array(string13[0].x2.animVal.value,string13[0].y1.animVal.value, string13[5].y1.animVal.value)
  createSeparationLine(strings13Inf[0],strings13Inf[1],strings13Inf[2],svg13)
  arr.map.call(string13,(el)=> el.setAttribute('x2',`${strings13Inf[0] + 270}`))
}else if(linesCounter > 39 && linesCounter < 42){
  setViewBox("0 0 950 2100")
  let svg14 = document.getElementById('svg14')
  let string14 = document.getElementsByClassName('string14')
  let strings14Inf = new Array(string14[0].x2.animVal.value,string14[0].y1.animVal.value, string14[5].y1.animVal.value)
  createSeparationLine(strings14Inf[0],strings14Inf[1],strings14Inf[2],svg14)
  arr.map.call(string14,(el)=> el.setAttribute('x2',`${strings14Inf[0] + 270}`))
}else if(linesCounter > 42 && linesCounter < 45){
  setViewBox("0 0 950 2250")
  let svg15 = document.getElementById('svg15')
  let string15 = document.getElementsByClassName('string15')
  let strings15Inf = new Array(string15[0].x2.animVal.value,string15[0].y1.animVal.value, string15[5].y1.animVal.value)
  createSeparationLine(strings15Inf[0],strings15Inf[1],strings15Inf[2],svg15)
  arr.map.call(string15,(el)=> el.setAttribute('x2',`${strings15Inf[0] + 270}`))
}else if(linesCounter > 45 && linesCounter < 48){
  setViewBox("0 0 950 2400")
  let svg16 = document.getElementById('svg16')
  let string16 = document.getElementsByClassName('string16')
  let strings16Inf = new Array(string16[0].x2.animVal.value,string16[0].y1.animVal.value, string16[5].y1.animVal.value)
  createSeparationLine(strings16Inf[0],strings16Inf[1],strings16Inf[2],svg16)
  arr.map.call(string16,(el)=> el.setAttribute('x2',`${strings16Inf[0] + 270}`))
}else if(linesCounter > 48 && linesCounter < 51){
  setViewBox("0 0 950 2550")
  let svg17 = document.getElementById('svg17')
  let string17 = document.getElementsByClassName('string17')
  let strings17Inf = new Array(string17[0].x2.animVal.value,string17[0].y1.animVal.value, string17[5].y1.animVal.value)
  createSeparationLine(strings17Inf[0],strings17Inf[1],strings17Inf[2],svg17)
  arr.map.call(string17,(el)=> el.setAttribute('x2',`${strings17Inf[0] + 270}`))
}else if(linesCounter > 51 && linesCounter < 54){
  setViewBox("0 0 950 2700")
  let svg18 = document.getElementById('svg18')
  let string18 = document.getElementsByClassName('string18')
  let strings18Inf = new Array(string18[0].x2.animVal.value,string18[0].y1.animVal.value, string18[5].y1.animVal.value)
  createSeparationLine(strings18Inf[0],strings18Inf[1],strings18Inf[2],svg18)
  arr.map.call(string18,(el)=> el.setAttribute('x2',`${strings18Inf[0] + 270}`))
}else if(linesCounter > 54 && linesCounter < 57){
  setViewBox("0 0 950 2850")
  let svg19 = document.getElementById('svg19')
  let string19 = document.getElementsByClassName('string19')
  let strings19Inf = new Array(string19[0].x2.animVal.value,string19[0].y1.animVal.value, string19[5].y1.animVal.value)
  createSeparationLine(strings19Inf[0],strings19Inf[1],strings19Inf[2],svg19)
  arr.map.call(string19,(el)=> el.setAttribute('x2',`${strings19Inf[0] + 270}`))
}else if(linesCounter > 57 && linesCounter < 60){
  setViewBox("0 0 950 3000")
  let svg20 = document.getElementById('svg20')
  let string20 = document.getElementsByClassName('string20')
  let strings20Inf = new Array(string20[0].x2.animVal.value,string20[0].y1.animVal.value, string20[5].y1.animVal.value)
  createSeparationLine(strings20Inf[0],strings20Inf[1],strings20Inf[2],svg20)
  arr.map.call(string20,(el)=> el.setAttribute('x2',`${strings20Inf[0] + 270}`))
}else if(linesCounter > 60 && linesCounter < 63){
  setViewBox("0 0 950 3150")
  let svg21 = document.getElementById('svg21')
  let string21 = document.getElementsByClassName('string21')
  let strings21Inf = new Array(string21[0].x2.animVal.value,string21[0].y1.animVal.value, string21[5].y1.animVal.value)
  createSeparationLine(strings21Inf[0],strings21Inf[1],strings21Inf[2],svg21)
  arr.map.call(string21,(el)=> el.setAttribute('x2',`${strings21Inf[0] + 270}`))
}else if(linesCounter > 63 && linesCounter < 66){
  setViewBox("0 0 950 3300")
  let svg22 = document.getElementById('svg22')
  let string22 = document.getElementsByClassName('string22')
  let strings22Inf = new Array(string22[0].x2.animVal.value,string22[0].y1.animVal.value, string22[5].y1.animVal.value)
  createSeparationLine(strings22Inf[0],strings22Inf[1],strings22Inf[2],svg22)
  arr.map.call(string22,(el)=> el.setAttribute('x2',`${strings22Inf[0] + 270}`))
}else if(linesCounter > 66 && linesCounter < 69){
  setViewBox("0 0 950 3450")
  let svg23 = document.getElementById('svg23')
  let string23 = document.getElementsByClassName('string23')
  let strings23Inf = new Array(string23[0].x2.animVal.value,string23[0].y1.animVal.value, string23[5].y1.animVal.value)
  createSeparationLine(strings23Inf[0],strings23Inf[1],strings23Inf[2],svg23)
  arr.map.call(string23,(el)=> el.setAttribute('x2',`${strings23Inf[0] + 270}`))
}else if(linesCounter > 69 && linesCounter < 72){
  setViewBox("0 0 950 3600")
  let svg24 = document.getElementById('svg24')
  let string24 = document.getElementsByClassName('string24')
  let strings24Inf = new Array(string24[0].x2.animVal.value,string24[0].y1.animVal.value, string24[5].y1.animVal.value)
  createSeparationLine(strings24Inf[0],strings24Inf[1],strings24Inf[2],svg24)
  arr.map.call(string24,(el)=> el.setAttribute('x2',`${strings24Inf[0] + 270}`))
}else if(linesCounter > 72 && linesCounter < 75){
  setViewBox("0 0 950 3750")
  let svg25 = document.getElementById('svg25')
  let string25 = document.getElementsByClassName('string25')
  let strings25Inf = new Array(string25[0].x2.animVal.value,string25[0].y1.animVal.value, string25[5].y1.animVal.value)
  createSeparationLine(strings25Inf[0],strings25Inf[1],strings25Inf[2],svg25)
  arr.map.call(string25,(el)=> el.setAttribute('x2',`${strings25Inf[0] + 270}`))
}else if(linesCounter > 75 && linesCounter < 78){
  setViewBox("0 0 950 3900")
  let svg26 = document.getElementById('svg26')
  let string26 = document.getElementsByClassName('string26')
  let strings26Inf = new Array(string26[0].x2.animVal.value,string26[0].y1.animVal.value, string26[5].y1.animVal.value)
  createSeparationLine(strings26Inf[0],strings26Inf[1],strings26Inf[2],svg26)
  arr.map.call(string26,(el)=> el.setAttribute('x2',`${strings26Inf[0] + 270}`))
}else if(linesCounter > 78 && linesCounter < 81){
  setViewBox("0 0 950 4050")
  let svg27 = document.getElementById('svg27')
  let string27 = document.getElementsByClassName('string27')
  let strings27Inf = new Array(string27[0].x2.animVal.value,string27[0].y1.animVal.value, string27[5].y1.animVal.value)
  createSeparationLine(strings27Inf[0],strings27Inf[1],strings27Inf[2],svg27)
  arr.map.call(string27,(el)=> el.setAttribute('x2',`${strings27Inf[0] + 270}`))
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
