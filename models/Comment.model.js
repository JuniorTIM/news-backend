const mongoose = require("mongoose");

const commentsSchema = mongoose.Schema({
  name: {
    ref: "User",
    type: mongoose.SchemaTypes.ObjectId
  },
  text: String,
  newsId: {
    ref: "News",
    type: mongoose.SchemaTypes.ObjectId
  }
});

const Comment = mongoose.model("Comment", commentsSchema);

module.exports = Comment;