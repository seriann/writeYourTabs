const { Tab } = require("../models/index")

const TabController = {
  findAll(req,res,next){
    Tab.find({active:true})
        .then(tab => res.send(tab))
        .catch(err => next(err))
  },
  create(req,res,next){
   if(!req.file)return res.status(406).send({error:'tab not submitted'})
    Tab.create(req.body)
        .then(tab => {
          if(req.file){
            console.log("req.file",req.file);
            const { filename } = req.file
            tab.setPdf(filename)
            tab.save()
          }
          res.send(tab)
        })
        .catch(err => next(err))
  },
  update(req,res,next){
    Tab.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
    .then((updated) => {
      res.status(200).send(updated)
    })
    .catch(err => next(err))
  },
  findById(req,res,next){
    Tab.findById({_id:req.params.id, active: true})
       .populate({ path: "comments", select: ['text','owner']})
        .then(tab => res.send(tab))
        .catch(err => next(err))
  },
  delete(req,res,next){
    Tab.findByIdAndUpdate(req.params.id,{ active: false}, {new: true})
        .then(tab => res.send(tab))
        .catch(err => next(err))
  },
   findAllUserTabs(req,res,next){
     let userId = req.params.userId
     Tab.find({active: true})
        .then(tabs => {
          let filtered = tabs.filter(el=> el.userId == userId)
          res.send(filtered)
        })
        .catch(err => next(err))
   },
  async search(req,res,net){
     //localhost:xxxx/api/tabs/search?for="something"
     let regexQuery = new RegExp(req.query.for,"i")

     let arrTitle = await Tab.find({title: regexQuery})
     let arrAuthor = await Tab.find({author: regexQuery})
     let longArr = []
     let shortArr = []
     let sendArr = []
     let indexesOfShortArr = []

          if(arrTitle.length > arrAuthor.length){          //el array con más coincidencias
            longArr = arrTitle
            shortArr= arrAuthor
          }
          else if((arrTitle.length < arrAuthor.length)){
            longArr = arrAuthor
            shortArr= arrTitle
          }

          for (let i = 0; i < longArr.length-1; i++) {
            for (let j = 0; j < shortArr.length; j++) {
              if(longArr[i]._id.toString() == shortArr[j]._id.toString()){
                indexesOfShortArr = [...indexesOfShortArr, j]
              }
            }
          }

          indexesOfShortArr.map((el)=> {
            shortArr[el] = null
            //shortArr.splice(el,1)
          })
          shortArr = shortArr.filter(el => el != null)
          sendArr = longArr.concat(shortArr)

          res.send(sendArr)
   }
}

let filtCoincidence = (arr,arr2) => {
  let coincidences = []
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i+1; j < arr.length-1; j++) {
      if(arr[i]._id.toString() ===  arr[j]._id.toString()){
        coincidences.push(arr[j])
      }
    }
  }
  return coincidences
}

module.exports = TabController
