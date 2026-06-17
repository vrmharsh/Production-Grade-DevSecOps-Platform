
require("./tracing");

const express = require('express');

const app = express();
app.disable("x-powered-by");

const cors = require('cors');
const dotenv=require('dotenv');
dotenv.config({path:'./.env'})


require('./database/myDataBase');

app.use(express.json());    // converting express.json format data into object
app.use( cors () );

app.use(require('./router/user'));

const PORT=process.env.PORT || 5001; 


app.listen(PORT, () =>{
    console.log(`Server started ${PORT}`);
})

process.on("SIGTERM", () => {
    console.log("SIGTERM received");
    server.close(() => {
        console.log("Server closed");
    });
});