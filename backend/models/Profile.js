const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  bio: String,
  favoriteTopics: [String],
  recentPosts: [String],
});

module.exports = mongoose.model("Profile", ProfileSchema);
