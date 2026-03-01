import express from "express";
import cors from "cors";
 
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("hello")
})

app.listen(3000, ()=>{
    console.log("the server is ready on port 3000");
})