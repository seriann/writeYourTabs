const Functions = {
   filtCoincidence(arr,arr2){
    let coincidences = []
    for (let i = 0; i < arr.length-1; i++) {
      for (let j = i+1; j < arr.length-1; j++) {
        if(arr[i]._id.toString() ===  arr[j]._id.toString()){
          coincidences.push(arr[j])
        }
      }
    }
    return coincidences
  },
   paginate(arr, size) {
  return arr.reduce((acc, val, i) => {
    console.log("redondeo para:", (i/ size));
    let idx = Math.floor(i / size)
    let page = acc[idx] || (acc[idx] = [])
    page.push(val)

    return acc
  }, [])
 }
}

module.exports = Functions
