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

export const createString = (fatherElm) => {
  const newString = document.createElementNS('http://www.w3.org/2000/svg', 'line')
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
