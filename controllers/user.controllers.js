import User from "../model/user.model.js";

export const createUser = async (req, res) => {
    try {
        const user = await User.create({ ...req.body });
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error!" });
    }
}


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll()
        res.status(200).send(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error!" });
    }
}



export const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body
        if (!name || !email) {
            return res.status(400).json({ smg: "Email and name must be entered." })
        }
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({ smg: "user not found" })
        }
        const updatedUser = await user.update(req.body)
        res.status(200).send(updatedUser)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error!" });
    }
}



export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await User.findByPk(id)
        if (!user) {
            return res.status(404).json({ smg: "user not found" })
        }
        await user.destroy()
        res.sendStatus(204)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error!" });
    }
}