const express = require("express");
const userRoutes = express.Router();
const userctrl = require("../controller/userctrl");
const postctrl = require("../controller/postctrl");
const bookmarkctrl = require("../controller/bookmarkctrl");

const { USER, POST, BOOKMARK } =
  require("../utils/constants/app_constants").ROUTES;

userRoutes.post(USER.REGISTER, userctrl.register);
userRoutes.post(USER.LOGIN, userctrl.login);
userRoutes.post(USER.FIND, userctrl.findUser);
userRoutes.get(USER.AUTH, userctrl.authenticate);
userRoutes.post(POST.CREATE, postctrl.createPost);
userRoutes.post(POST.GET, postctrl.getPosts);
userRoutes.post(POST.FIND, postctrl.getPost);
userRoutes.post(POST.DELETE, postctrl.deletePost);
userRoutes.post(POST.EDIT, postctrl.editPost);
userRoutes.post(POST.BY_USER, postctrl.getPostsByUser);
userRoutes.post(BOOKMARK.CREATE, bookmarkctrl.createBookmark);
userRoutes.post(BOOKMARK.GET, bookmarkctrl.getBookmarks);
userRoutes.post(BOOKMARK.DELETE, bookmarkctrl.deleteBookmark);
userRoutes.post(BOOKMARK.FIND, bookmarkctrl.findBookmark);
// userRoutes.post(USER.AUTH, userctrl.authenticate);

module.exports = userRoutes;
