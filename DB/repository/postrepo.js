const PostModel = require("../models/postmodel");

module.exports = {
  async createPost(postobj) {
    

    var promise = await PostModel.create(postobj);
    if(promise){

        return promise;
    }
    else return null;
  },

  async getPosts() {
    const posts = await PostModel.find();
    if(posts) return posts;
    else return null;
  },

  countTime(content) {
    let num = content.split(" ").length;

    return Math.floor(num / 200) + 1;
  },

  async getPostById(postobj){
      const post = await PostModel.findOne({_id:postobj.postId});
      return post;
  },

  async getPostsByUser(userobj){
      const posts = await PostModel.find({authorId:userobj.user});
      return posts;
  },


  async editPost(postobj){
      const post = await PostModel.findOneAndUpdate({_id:postobj.id}, postobj, {new:true});
      return post;
  },

  async deletePost(postobj){
      const post = await PostModel.findOneAndDelete({_id:postobj.post});
      if(post)
      {
        return post;
      }
      else{
        return null
      }
  }
};
