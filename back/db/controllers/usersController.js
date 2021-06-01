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
            console.log("REQ.FILE",req.file);
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
       .populate({path:"favsTabs",select:"title"})
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
  deleteFavTab(req, res, next) {
    User.findById(req.params.userId)
      .populate({ path: "favsTabs", select: "title" })
      .then((user) => {
        user.favsTabs = user.favsTabs.filter(
          (e) => e._id != req.params.tabId
        );
        user.save();
        res.send(user.favsTabs);
      })
      .catch((err) => next(err));
  },
  search(req, res, next){
    //localhost:xxxx/api/users/v/search?for="something"&page="num"
    let perPage = 7
    let page = parseInt(req.query.page) || 1
    let regexQuery = new RegExp(req.query.for,"i")
    User.find({username: regexQuery})
       .skip((perPage * page) - perPage)
       .limit(perPage)
       .exec((err, results)=>{
         User.count((err, count) =>{
           if(err) return next(err)
           res.json({
             results:results,
             page:{
               now:page,
               total: Math.ceil(count/perPage) //redondea el número de paginas
             }})
         })
       })
  },
//---------------------passport-------------------------------------------------
  login(req, res, next){
    console.log(req.user);
     res.send(req.user)
  },
  logout(req, res, next){
    req.logOut()
    res.sendStatus(200)
  },
  check(req, res, next){
    if(req.user)return res.send(req.user)
      res.sendStatus(401)
    }
  }


module.exports = UserController
