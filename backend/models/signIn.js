const mongoose = require("mongoose");

const signInUsers = new mongoose.Schema({   // Creating schema

      email: {
              type: String,
              required: true,
             },

     password: {
               type: String,
               required: true,
              },


});



const User = mongoose.model("SIGNINUSERS", signInUsers); // USER is the name of collection given in DataBase.

module.exports = User;


/* SIGNINUSERS */