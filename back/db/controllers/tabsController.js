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
   search(req,res,net){
     //localhost:xxxx/api/tabs/search?for="title"&param="something"&page="num"
     //localhost:xxxx/api/tabs/search?for="author"&param="something"&page="num"
     let perPage = 7
     let page = req.query.page || 1
     let regexQuery = new RegExp(req.query.param,"i")
     if(req.query.for == "title"){
     Tab.find({title: regexQuery})
        .populate({ path: "userId", select: "username" })
        .skip((perPage * page) - perPage)
        .limit(perPage)
        .exec((err, results)=>{
          Tab.count((err, count) =>{
            if(err) return next(err)
            res.json({
              results:results,
              page:{
                now:page,
                total: Math.ceil(count/perPage) //redondea el número de paginas
              }})
          })
        })
      }else if(req.query.for == "author"){
        Tab.find({author: regexQuery})
           .populate({ path: "userId", select: "username" })
           .skip((perPage * page) - perPage)
           .limit(perPage)
           .exec((err, results)=>{
             Tab.count((err, count) =>{
               if(err) return next(err)
               res.json({
                 results:results,
                 page:{
                   now:page,
                   total: Math.ceil(count/perPage) //redondea el número de paginas
                 }})
             })
           })
      }

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
