import { useLocation } from 'react-router-dom'
export const useQuery = () => new URLSearchParams(useLocation().search);

export const paginate = (arr, size) => {
 return arr.reduce((acc, val, i) => {
  let idx = Math.floor(i / size)
  let page = acc[idx] || (acc[idx] = [])
  page.push(val)

  return acc
 }, [])
}

export const autoCapitalize = (str) => {
   str = str.toLowerCase(str)
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export const convertPagesToArray = (numOfPages) => {
  let arr = []
  for (let i = 1; i <= numOfPages; i++) {
    arr.push(i)
  }
  return arr
}

export const createSvgText = (mouseX, mouseY,coordsX, coordsY,rounded, fretNum,svg, id) =>{
  let bool = true
  const text = document.createElementNS('http://www.w3.org/2000/svg','text')
  const txtNode = document.createTextNode(fretNum)
  text.appendChild(txtNode)
  text.setAttribute('x', `${mouseX - coordsX - 3}`)
  if(rounded >= 12 && rounded <= 18){
    text.setAttribute('y', 22)
  }else if(rounded >=27 && rounded <=33){
    text.setAttribute('y', 37)
  }else if(rounded >= 42 && rounded <= 48){
    text.setAttribute('y', 52)
  }else if(rounded >= 57 && rounded <=63){
    text.setAttribute('y', 67)
  }else if(rounded >= 72 && rounded <= 78){
    text.setAttribute('y', 82)
  }else if (rounded >= 87 && rounded <= 93) {
    text.setAttribute('y', 97)
 }else {
   bool = false
 }
 text.setAttribute('font-size', '18')
 text.setAttribute('id', id)
 svg.appendChild(text)
 if(bool)return id

}

export const createText = (svgX,svgY,fretNum,id) => {

  let split = Math.round(svgY).toString().split("")
  let splY = split.length > 2? split : split=[0, ...split]

  let bool = true
  const text = document.createElementNS('http://www.w3.org/2000/svg','text')
  const txtNode = document.createTextNode(fretNum)
  text.appendChild(txtNode)
  text.setAttribute('x', `${svgX - 3}`)
  if(svgY >= join(splY,12) && svgY <= join(splY,18)){
    text.setAttribute('y', join(splY,22))
  }else if(svgY >= join(splY,27) && svgY <= join(splY,33)){
    text.setAttribute('y', join(splY,37))
  }else if(svgY >= join(splY,42) && svgY <= join(splY,48)){
    text.setAttribute('y', join(splY,52))
  }else if(svgY >= join(splY,57) && svgY <= join(splY,63)){
    text.setAttribute('y', join(splY,67))
  }else if(svgY >= join(splY,72) && svgY <= join(splY,78)){
    text.setAttribute('y', join(splY,82))
  }else if (svgY >= join(splY,87) && svgY <= join(splY,93)) {
    text.setAttribute('y', join(splY,97))
 }else {
   bool = false
 }
 text.setAttribute('font-size', '18')
 text.setAttribute('id', id)
 svg.appendChild(text)
 if(bool)return id
}

function join(arr,num){
  if(arr.length > 3){
    const numArr = num.toString().split("")
  let newArr = arr.map((el,i)=> {
     if(i == arr.length - numArr.length)return el = numArr[0]
     else if(i == arr.length - 1)return el = numArr[1]
     else return el
   })
    return parseInt(newArr.join(""))
  }else{
    return parseInt([arr[0],num].join(""))
  }
}

export function svgPoint(element, x, y) {
  const pt = svg.createSVGPoint();
  pt.x = x;
  pt.y = y;

  return pt.matrixTransform( element.getScreenCTM().inverse() );

}

export const uniqid = (prefix, moreEntropy) => {
  if (typeof prefix === 'undefined') {
    prefix = ''
  }
  var retId
  var _formatSeed = function (seed, reqWidth) {
    seed = parseInt(seed, 10).toString(16)
    if (reqWidth < seed.length) {

      return seed.slice(seed.length - reqWidth)
    }
    if (reqWidth > seed.length) {

      return Array(1 + (reqWidth - seed.length)).join('0') + seed
    }
    return seed
  }
  var $global = (typeof window !== 'undefined' ? window : global)
  $global.$locutus = $global.$locutus || {}
  var $locutus = $global.$locutus
  $locutus.php = $locutus.php || {}
  if (!$locutus.php.uniqidSeed) {
    $locutus.php.uniqidSeed = Math.floor(Math.random() * 0x75bcd15)
  }
  $locutus.php.uniqidSeed++
  retId = prefix
  retId += _formatSeed(parseInt(new Date().getTime() / 1000, 10), 8)

  retId += _formatSeed($locutus.php.uniqidSeed, 5)
  if (moreEntropy) {
    retId += (Math.random() * 10).toFixed(8).toString()
  }
  return retId
}
export const createSeparationLine = (x1,firstString,sixthString,svg) => {
  const separationLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        separationLine.setAttribute('x1',x1)
        separationLine.setAttribute('x2',x1)
        separationLine.setAttribute('y1',firstString)
        separationLine.setAttribute('y2',sixthString)
        separationLine.setAttribute('stroke','grey')
        separationLine.setAttribute('stroke-width',"2")
  svg.appendChild(separationLine);
}

export const createSvg = (container,id,fn) => {
  const div = document.getElementById(container)
  const svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
        svg.setAttribute("version", "1.1")
        svg.setAttribute("baseProfile", "full")
        svg.setAttribute("width", "90%")
        svg.setAttribute("id", id)
        svg.setAttribute("onclick", "writeNumber()")
  div.appendChild(svg)
}

export const createSvgLine = (container,x1,x2,y1,y2,className) => {
  const svgContainer = document.getElementById(container)
  const line = document.createElementNS('http://www.w3.org/2000/svg','line')
        line.setAttribute("x1",x1)
        line.setAttribute("x2",x2)
        line.setAttribute("y1",y1)
        line.setAttribute("y2",y2)
        line.setAttribute("class",className)
        line.setAttribute("stroke","grey")
        line.setAttribute("stroke-width","1")
  svgContainer.appendChild(line)
}
