import { User } from "../models/user.model.js";
import bcrypt from "bcrypt"

export const register = async (req, res) =>{
    const {username, password, name} = req.body;

    try {
        if(!username || !password){
            return res.status(500).send({
                message: "Incomplete Credentials",
            });
        };

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);
        
        const user = await User.create({
            username,
            password: hashed,
            name,
        })

        return res.status(201).send({
            user
        });


    } catch (error) {
        console.log(error.message);

        return res.status(500).send({
            message: "Error Happened",
        });
    };



}


export const login = (req, res) =>{

}
