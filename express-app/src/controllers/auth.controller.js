import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, password, name } = req.body;

    try {
        if (!username || !password) {
            return res.status(400).send({
                message: "Incomplete Credentials",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            password: hashed,
            name,
        });

        return res.status(201).send({
            user,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            message: "Error Happened",
        });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).send({
                message: "Invalid Credentials",
            });
        }

        const check = await bcrypt.compare(password, user.password);

        if (!check) {
            return res.status(401).send({
                message: "Invalid Credentials",
            });
        }

        const token = jwt.sign({ userId: user.id, name: user.name }, "secret");

        return res.status(200).send({ user, token });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send({
            message: "Error Happened",
        });
    }
};
