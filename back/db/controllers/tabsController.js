const { Tab } = require("../models/index")
const Functions = require("./fn")

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
   search(req,res,next){
     //localhost:xxxx/api/tabs/search?for="title"&param="something"&page="num"
     //localhost:xxxx/api/tabs/search?for="author"&param="something"&page="num"
     let perPage = 7
     let page = parseInt(req.query.page) || 1
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
 },
  searchV2(req,res,next){
    //localhost:xxxx/api/tabs/search?for="something"&page="num"
    let perPage = 7
    let page = parseInt(req.query.page) || 1
    let regexQuery = new RegExp(req.query.for,"i")
    let longArr = []
    let shortArr = []
    let indexesOfShortArr= []
    let sendArr = []
    const promises = [Tab.find({title: regexQuery}).populate({ path: "userId", select: "username" }).exec(), Tab.find({author: regexQuery}).populate({ path: "userId", select: "username" }).exec()]
    Promise.all(promises)
           .then((result)=>{
             if(result[0].length > result[1].length){
               longArr = result[0]
               shortArr= result[1]
             }else {
               longArr = result[1]
               shortArr= result[0]
             }
             for (let i = 0; i < longArr.length-1; i++) {
               for (let j = 0; j < shortArr.length; j++) {
                 if(longArr[i]._id.toString() == shortArr[j]._id.toString())indexesOfShortArr.push(j)
               }
             }
             indexesOfShortArr.map((el)=> {
               shortArr[el] = null
               //shortArr.splice(el,1)
             })
             shortArr = shortArr.filter(el => el != null)
            sendArr = longArr.concat(shortArr)

      const response = Functions.paginate(sendArr,perPage)
      console.log("res", response);
             res.json({results: response[page-1] || [],
                       page:{
                         now:page,
                         total:response.length
                       }
                     })
           })
           .catch((err)=>next(err))
 }
}

module.exports = TabController
