const jwt = require ( 'jsonwebtoken' )
const express = require ('express');
const router = express.Router();

const bcrypt = require ( 'bcryptjs' );

const User = require('../models/user');
const SignUp = require('../models/signUp');
/* const SignIn = require('../models/signIn'); */

  
router.get('/api/users', (req,res) =>{
    res.send('Hello');
})

router.get('/', (req,res) =>{
    res.send('Home');
})


router.get('/Projects', (req,res) =>{
    res.send('Projects');
})


router.get('/contact', (req,res) =>{ 
    res.send( "contact" );
})

router.post("/contact", async (req, res) => {
    const { name, email, number, message } = req.body;
  
    if (!name || !email || !number || !message) {
      return res.status(422).json({ error: "Please enter the correct details" }); // 1st condition if any detail entered is wrong.
    }
  
    try {


      const userExits = await User.findOne({ name: name });
  
      if (userExits) {
        return res.status(422).json({ error: "user already exists" });
      } else {
        const user = new User({ name, email, number, message });
  
        await user.save(); 
  
        res.status(201).json({ message: "successfull" });
      }
    } catch (error) {
      console.log(error);
    }
  });


router.get('/About', (req,res) =>{
    res.send('About');
})


router.get('/SignUp', (req,res) =>{
    res.send( "SignUp" );
})


router.post("/SignUp", async (req, res) => {
    const { email, password, confirmPassword } = req.body;
  
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ error: "Please fill the correct details" });
    }
  
    try {
      const emailExists = await SignUp.findOne({ email: email });
  
      if (emailExists) {
        return res.status(422).json({ error: "Email already exists" });
      } else if (password != confirmPassword) {
        return res.status(422).json({ error: "Password does not matches" });
      } else  {
        const user = new SignUp({ email, password, confirmPassword });
  
        await user.save();
        res.status(200).json({ message: " user sign up successfull " });
      }
    } catch (error) {
      console.log(error);
    }
  });



  router.get('/SignIn', (req,res) =>{
    res.send( "SignIn" );
})


  router.post("/SignIn", async (req, res) => {

    try {

    let token; 
    const { email, password } = req.body;
  
    /* if (!email || !password) {
      return res.status(400).json({ error: "Please fill the correct details" });
    } */
  
 
      const loginUser = await SignUp.findOne({ email: email });   // email matches with email in database, then compare that bcrypted password with current password types by user.
  
       if (loginUser) { 

        const isMatch = await bcrypt.compare(password, loginUser.password);

        token = await loginUser.generateAuthToken();
        console.log(token)
  
        res.cookie (" jwtoken " , token , {
          expires: new Date(Date.now() + 25892000000),
          httpOnly:true
        });

        if (!isMatch) {
          res.status(400).json({ error: "Please fill correct password " });
        } else {


          res.status(200).json({ message: "SignIn successfull" });
        }
       }
    } catch (error) {
      console.log(error);
    }
  });


  router.get("/health", (req,res)=>{
    res.send("HealthChecks: status code 200")
  })

  module.exports = router;