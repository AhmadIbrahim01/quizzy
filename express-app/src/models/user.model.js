import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },

    password:{
        type: String,
    },
    name:{
        type: String,
    }
});


export const User = model("User", userSchema);
