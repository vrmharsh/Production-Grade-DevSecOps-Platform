const jwt = require ( 'jsonwebtoken' )
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const signUpUsers = new mongoose.Schema({
  // Creating schema

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  confirmPassword: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

signUpUsers.pre( 'save' , async function ( next )   // this pre is a midleware as this will run before user.save() in singUp router.
                                                    // Also here next is needed as req,res is not required so only next is called here.
{
  if( this.isModified('password'))
  {

    this.password = await bcrypt.hash( this.password , 12);                 // hashing the current password.
    this.confirmPassword = await bcrypt.hash( this.confirmPassword , 12);

  }
  next();
});


signUpUsers.methods.generateAuthToken = async function () {
   try
     {
      let utoken = jwt.sign ({ _id: this._id } , process.env.SECRET_KEY )
      this.tokens = this.tokens.concat ( { token : utoken });
      await this.save();
      return token;
   } catch ( err ) {
    console.log ( err )
   }
}

const User = mongoose.model("SIGNUPUSERS", signUpUsers); // USER is the name of collection given in DataBase.

module.exports = User;
