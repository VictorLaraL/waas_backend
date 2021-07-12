import Role from "../models/Role";


export const getRoles = async (req, res) => {
    let roles = await Role.find();
    res.json(roles);
  };