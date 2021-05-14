const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String
},
    { timestamps: { createdAt: 'created_at' } }
);