const BookmarkModel = require('../models/bookmarkmodel');

module.exports = {
    async createBookmark(bookmarkobj){
        const bookmark = await BookmarkModel.create(bookmarkobj);
        return bookmark;
    },

    async getBookmarks(userobj){
        const bookmarks = await BookmarkModel.find({user:userobj.user});
        return bookmarks;
    },

    async deleteBookmark(bookmarkobj){
        const bookmark = await BookmarkModel.findOneAndDelete({user:bookmarkobj.user, post:bookmarkobj.post});
        if(bookmark)
        {
            return bookmark;
        }
        else{
            return null
        }
    },

    async findBookmark(bookmarkobj){
        const bookmark = await BookmarkModel.findOne({user:bookmarkobj.user, post:bookmarkobj.post});
        if(bookmark)
        {
            return true;
        }
        else{
            return false
        }
    }



}