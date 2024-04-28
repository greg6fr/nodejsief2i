const { body, validationResult } = require('express-validator');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true,'Vous devez renseigner un nom'],
    },
    email: {
      type: String,
      required: [true,'Vous devez renseigner un email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true,'Vous devez renseigner un password'],
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user'
    },
    profileImage: {
      type: String, // Type de données pour stocker l'URL de l'image
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
