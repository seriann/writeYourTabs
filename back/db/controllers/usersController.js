const { User } = require("../models/index")

const UserController = {
  findAll(req,res,next){
    User.find({active:true})
        .then(users => res.send(users))
        .catch(err => next(err))
  },
  create(req,res,next){
    User.create(req.body)
        .then(user => {
          if(req.file){
            const { filename } = req.file
            user.setImage(filename)
            user.save()
          }
          res.send(user)
        })
        .catch(err => next(err))
  },
  update(req,res,next){
    User.findByIdAndUpdate({_id: req.params.id}, req.body,{new: true})
    .then((updated) => {
      res.status(200).send(updated)
    })
    .catch(err => next(err))
  },
  findById(req,res,next){
    User.findById({_id:req.params.id, active:true})
        .then(user => res.send(user))
        .catch(err => next(err))
  },
  delete(req,res,next){
    User.findByIdAndUpdate(req.params.id,{ active: false}, {new: true})
        .then(user => res.send(user))
        .catch(err => next(err))
  },
//--------------------------Favourites------------------------------------------
showFavTabs(req,res,next){
   User.findById({_id:req.params.id})
       .populate({path:"tabs",select:"title"})
       .then(user => res.send(user.favsTabs))
       .catch(err => next(err))
 },
 addFavTab(req,res,next){
    User.findById({_id: req.params.id})
        .then(user => {
            user.favsTabs.push(req.params.tabId)
            user.save()
          res.status(201).send(user)
        })
        .catch(err => next(err))
  },
  deleteFavProduct(req, res, next) {
    User.findById(req.params.userId)
      .populate({ path: "favsProducts", select: "title" })
      .then((user) => {
        user.favsTabs = user.favsTabs.filter(
          (e) => e._id != req.params.tabId
        );
        user.save();
        res.send(user.favsTabs);
      })
      .catch((err) => next(err));
  },
}

module.exports = UserController
