import User from "../models/User";

export const createUser = (req, res) => {
    res.json(' creating user')
}

export const getUsers = async (req, res) => {
    let users = await User.find();
    res.json(users);
  };

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.status(204).json()
};