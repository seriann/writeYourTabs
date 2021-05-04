const { Tab } = require("../models/index")

const TabController = {
  findAll(req,res,next){
    Tab.find({active:true})
        .then(tab => res.send(tab))
        .catch(err => next(err))
  },
  create(req,res,next){
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
   /*addNewLine(req,res,next){
     Tab.findById({_id:req.params.id})
        .then(tab => {
          [...tab.modelPerLine, req.body]
        })
   }*/
}

module.exports = TabController
