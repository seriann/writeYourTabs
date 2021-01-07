const { Comments } = require("../models/index")

const CommentsController = {
  findAll(req,res,next){
    Comments.find({active:true})
        .populate({ path: })
        .then(comment => res.send(comment))
        .catch(err => next(err))
  },
  create(req,res,next){
    Comments.create(req.body)
        .then(comment => res.send(comment))
        .catch(err => next(err))
  },
  update(req,res,next){
    Comments.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
    .then((updated) => {
      res.status(200).send(updated)
    })
    .catch(err => next(err))
  },
  findById(req,res,next){
    Comments.findById({_id:req.params.id, active:true})
        .then(comment => res.send(comment))
        .catch(err => next(err))
  },
  delete(req,res,next){
    Comments.findByIdAndUpdate(req.params.id,{ active: false}, {new: true})
        .then(comment => res.send(comment))
        .catch(err => next(err))
  },
}

module.exports = CommentsController
