const UserModel = require("../models/usermodel");
const { response } = require("express");
const userctrl = require("../../controller/userctrl");
const bcrypt = require("bcryptjs");


module.exports = {
  async register(userobj) {
    var promise = UserModel.create(userobj);
    if(promise) return promise;
    else return null;
  },

  async login(userObj) {
    var user = await UserModel.findOne({ email: userObj.email });
        if (user) {
            const result = await bcrypt.compare(userObj.password, user.password);
            if (result) {
                
                return user;
            }
            else {
                return null;
            }
        }
        else return null;
  }, 

  async findUser(userobj) {
    var user = await UserModel.findOne({_id : userobj.authorId});
    if(user) {
        return user;
    }
    else return null;
  }, 
  async findUserByEmail(userobj) {
    var user = await UserModel.findOne({email : userobj.email});
    if(user) {
        return user;
    }
    else return null;
  }
};
