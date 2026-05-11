const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({               // Creating schema
  
        name:{

            type:String,
            required:true
              },

        email:{
                type:String,
                required:true
                  },


         number:{
            type:Number,
            required:true
               },


        message:{
            type:String,
            required:true
                } 

   } )


/* userSchema.pre( 'save' , async function( next )
{
  if( this.password.isModified('password'))
  {

    this.password = await bcrypt.hash( this.password , 12);                 // hashing the current password.
    this.confirmPassword = await bcrypt.hash( this.confirmPassword , 12);

  }
  next();
}) */


const User = mongoose.model('USER', userSchema );  // USER is the name of collection given in DataBase.

module.exports = User;