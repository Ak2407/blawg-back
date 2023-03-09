const mongoose = require('mongoose');
const BookmarkSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, ref : 'Users', required : true
    },
    post:{
        type:mongoose.Schema.Types.ObjectId, ref : 'Posts', required : true
    },



});

module.exports = mongoose.model.Bookmarks || mongoose.model('Bookmarks', BookmarkSchema);