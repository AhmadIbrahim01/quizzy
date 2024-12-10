import express from "express";
import authRoutes from "auth.routes.js";
import connectToDatabase from "./db/connection";


const app = express();
app.use(express.json());

app.use("/auth", authRoutes);


app.listen(8080, async ()=>{
    console.log("Running at port 8080");

    connectToDatabase();
})