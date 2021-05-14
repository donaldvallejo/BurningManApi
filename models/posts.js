const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    name: String
},
    { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model("Post", PostSchema);