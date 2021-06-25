import  jwt  from "jsonwebtoken";
import  config  from "../config";
import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if (!token) return res.status(403).json({message: "No token provided"}) 

        const decoded = jwt.verify(token, config.SECRET)
        req.userId = decoded.id;    

        const user = await User.findById(req.userId)
        if (!user) return res.status(404).json({message: "No user found"})

        next()
    }catch (error){
        return res.status(401).json({message: "Unauthorized"})
    }
} 

export const isSeller = async (req, res, next) => {
    const userFound = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: userFound.roles}})
    
    for (let i = 0; i < roles.length; i++ ){
        if (roles[i].name === "sellers"){
            next()
            return;
        }
    }

    return res.status(403).json({message: "require sellers role"})
}

export const isAdmin = async (req, res, next) => {
    const userFound = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: userFound.roles}})
    
    for (let i = 0; i < roles.length; i++ ){
        if (roles[i].name === "admin"){
            next()
            return;
        }
    }

    return res.status(403).json({message: "require admin role"})
}