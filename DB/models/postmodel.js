const mongoose = require("mongoose");
const PostSchema = new mongoose.Schema({
  thumbnail: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: new Date(),
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  author : {
    type : String,
    default : "John Doe"

  },
  time: {
    type: Number,
    default: 1,
    min: 1,
  },
});

module.exports = mongoose.model.Posts || mongoose.model("Posts", PostSchema);
