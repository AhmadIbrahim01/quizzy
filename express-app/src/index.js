import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectToDatabase from "./db/connection.js";
import cors from "cors";

const app = express();

const corsOptions = {
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
};

  
app.use(cors(corsOptions));


app.use(express.json());

app.use("/auth", authRoutes);


app.listen(8080, async ()=>{
    console.log("Running at port 8080");

    connectToDatabase();
})