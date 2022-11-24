//-----------import des dependances--------------------------------
const express = require('express');
const cors = require('cors');
const app = express();
//---------------import des fichiers de configuratons-----------------
require ("dotenv").config({path: "./config/.env"});
require("./config/Db");
//---------------import des routes---------------------------------
const userRouter = require("./routes/Users_Route")
app.use(cors());
app.use(express.json())
app.use('/api', userRouter)  
//---------------création du SERVER----------------------------
port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server Running : ${port}`);
});