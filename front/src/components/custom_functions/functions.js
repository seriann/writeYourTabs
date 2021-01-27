export const createSvgText = (mouseX, mouseY,coordsX, coordsY,rounded, fretNum,svg) =>{
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
   return;
 }
 text.setAttribute('font-size', '18')
 svg.appendChild(text)
}
