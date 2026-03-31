import dotenv from "dotenv"
import conncetDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env"
})

conncetDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((error)=>{
    console.log("mongo db conncetion failed", error);
    
})