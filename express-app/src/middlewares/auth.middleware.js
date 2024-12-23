import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
    const authHeaders = req.headers.authorization;

    if(!authHeaders){
        return res.status(401).send({
            message: "Unauthorized",
        });
    };

    const splitted = authHeaders.split(" ")

    if(splitted.length !== 2 || splitted[0] !== "Bearer"){
        return res.status(401).send({
            message: "Unauthorized"
        })
    }

    const token = splitted[1]

    try {
        const payload = await jwt.verify(token, "secret");

        const id = payload.userId

        const user = await User.findById(id);

        req.user = user;

        next()
    } catch (error) {
        console.log(error);

        return res.status(401).send({
            message: "Error Happened",
        });
    };
}