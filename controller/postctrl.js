const repo = require("../DB/repository/postrepo");
const userRepo = require("../DB/repository/userrepo");
// const jwt = require("jsonwebtoken");
// const SECRET = "MY_SECRET_KEY";

module.exports = {
  async createPost(req, res) {
    // const {title, user} = req.body;
    let postobj = req.body;
    // console.log(postobj);
    var ans = repo.countTime(postobj.content);
    postobj["time"] = ans;
    const user = await userRepo
      .findUser(postobj)
      .then((result) => {
        console.log(result);
        postobj["author"] = result.name;
        repo
          .createPost(postobj)
          .then((data) => {
            res.send({
              message: "Post created successfully",
              success: true,
              // title,
              // user
            });
          })
          .catch((err) => {
            res.send({
              message: "Title Already exists",
              success: false,
              err,
            });
          });
      })
      .catch((err) => {
        res.send({
          success: false,
          err,
        });
      });
  },

  async getPosts(req, res) {
    await repo
      .getPosts()
      .then((data) => {
        res.send({
          message: "Posts fetched successfully",
          success: true,
          data,
        });
      })
      .catch((err) => {
        res.send({
          message: "Error in fetching posts",
          success: false,
          err,
        });
      });
  },

  async getPost(req, res) {
    console.log(req.body);
    await repo
      .getPostById(req.body)
      .then((data) => {
        res.send({
          success: true,
          data,
        });
      })
      .catch((err) => {
        success: false, err;
      });
  },
  async getPostsByUser(req, res) {
    await repo
      .getPostsByUser(req.body)
      .then((data) => {
        res.send({
          success: true,
          data,
        });
      })
      .catch((err) => {
        success: false, err;
      });
  },

  async deletePost(req, res) {
    await repo
      .deletePost(req.body)
      .then((data) => {
        res.send({
          success: true,
          message: "Post deleted Successfully",
          data,
        });
      })
      .catch((err) => {
        success: false, err;
      });
  },
  async editPost(req, res) {
    await repo
      .editPost(req.body)
      .then((data) => {
        res.send({
          success: true,
          message: "Post Edited Successfully",
          data,
        });
      })
      .catch((err) => {
        success: false, err;
      });
  },
};
