const repo = require('../DB/repository/bookmarkrepo');

module.exports = {
    async createBookmark(req,res){
        let bookmarkobj = req.body;
        repo.createBookmark(bookmarkobj)
            .then((data)=>{
                res.send({
                    message: 'Bookmark created successfully',
                    success : true,
                    data,
                });
            })
            .catch((err)=>{
                res.send({
                    message: 'Bookmark creation failed',
                    success : false,
                    err,
                });
            })
    },

    async getBookmarks(req,res){
        
        let user = req.body;
        repo.getBookmarks(user)
            .then((data)=>{
                res.send({
                    message: 'Bookmarks fetched successfully',
                    success: true,
                    data,
                });
            })
            .catch((err)=>{
                res.send({
                    success: false,
                    message: 'Bookmark fetching failed',
                    err,
                });
            })
    },

    async deleteBookmark(req,res){
        let bookmarkobj = req.body;
        console.log(req.body);
        repo.deleteBookmark(bookmarkobj)
            .then((data)=>{
                res.send({
                    success: true,
                    message: 'Bookmark deleted successfully',
                    data,
                });
            })
            .catch((err)=>{
                res.send({
                    success: false,
                    message: 'Bookmark deletion failed',
                    err,
                });
            })
    },

    async findBookmark(req,res){
        let bookmarkobj = req.body;
        const promise = await repo.findBookmark(bookmarkobj);
        if(promise)
        {
            res.send({
                success : true
            })
        }
        else
        {
            res.send({
                success : false
            })
        }
        
    }
}