const User = require('../models/model')

// CRUD commands
// read all 
module.exports.findAll = (req, res) =>{

    User.find({})
    .then(result=> res.json(result))//receive json data
    .catch(err => res.json(err))
}

// read one 
module.exports.findOne = (req, res) =>{
    // find one user with id parameter
    User.find({_id:req.params._id})
    .then(user => res.json(user))
    .catch(err => res.json(err))
}

// create a new table
module.exports.create = (req, res) =>{
    // title, URL, description, labels, author, and comment count destructure from req.body
    const { title,url, description, labels, author, commentCount} = req.body;
    // create with whatever value passed into req.body
    User.create({ title,url, description, labels, author, commentCount})
    .then(newUser => res.json(newUser))
    .catch(err => res.status(400).json(err))
}

// update  
module.exports.update = (req, res) =>{
    //update or edit a table with specific id passed by req.params._id
    User.updateOne({_id:req.params._id},req.body, {new:true})
    .then(updatedUser => res.json(updatedUser))
    .catch(err => res.status(400).json(err))
}

// delete 
module.exports.delete = (req, res) =>{
    // remove by id
    User.remove({_id:req.params._id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}

