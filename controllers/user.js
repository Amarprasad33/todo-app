import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {

};

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if(user){
        return res.status(404).json({
            success: false,
            message: "User Already Exist",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashedPassword });

    const token = jwt.sign({})
    
    res.status(201).json({

    })
};

export const login = async (req, res) => {

};


export const getUserDetails = async (req, res) => {
    
};









