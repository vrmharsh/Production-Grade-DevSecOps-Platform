const mongoose=require('mongoose')

const DB = process.env.MYDATABASE;



mongoose.connect(DB,{useNewUrlParser: true, useUnifiedTopology: true})  //database connected

.then(()=>{                                             //If database successfully connected then show connection open
    console.log('Connection open')
})
.catch((error)=>{                                      //If not then show 'Not open' and console.log that error.
    console.log('Not open');
    console.log(error);
})
;