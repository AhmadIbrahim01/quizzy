import { connect } from "mongoose";

const connectToDatabase = async ()=>{

    try {
        
        await connect("mongodb://localhost:27017/quizzy");

        console.log("connected to database")

    } catch (error) {
        console.log(error)
    }

}

export default connectToDatabase;