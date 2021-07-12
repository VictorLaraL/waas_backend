import {ROLES} from '../models/Role'
import User from '../models/User'

export const checkRolesExisted = (req, res, next) => {
    if (req.body.roles){
        for( let i=0; i< req.body.roles.length; i++){
            if (!ROLES.includes(req.body.roles[i])){
                return res.status(400).json({
                    messagge: `Role ${req.body.roles[i]} does not exists`
                })
            } 
        }
    }

    next();
}

export const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    const userFind = await User.findOne({username: req.body.username})

    if (userFind) return res.status(400).json({message: "El usuario ya existe"})

    const emailFind = await User.findOne({email: req.body.email})

    if (emailFind) return res.status(400).json({message: "El email ya existe"})

    next();
}