const UserModel = require('../models/user.model');
const ObjectfID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req,res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}