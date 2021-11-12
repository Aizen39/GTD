const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

//avoir tous les users sauf le mdp
module.exports.getAllUsers = async (req,res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}

module.exports.userInfo = (req,res) => {
    console.log(req.params);
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID uknown:' + req.params.id)

    UserModel.findById(req.params.id,(err,docs) => {
        if(!err) res.send(docs);
        else console.log('ID unknown:' + err);
    }).select('-password');
};
