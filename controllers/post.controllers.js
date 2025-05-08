import { where } from "sequelize";
import Post from "../model/post.model.js";
import User from "../model/user.model.js";

export const createPost = async (req, res) => {
    try {
        const { userId } = req.params;
        // console.log(userId);
        if (!userId) {
            return res.status(400).json({ smg: "User ID is required" });
        }

        const newPost = await Post.create({ ...req.body, userId: userId });
        res.status(201).send(newPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error!" });
    }
}

export const getAllPost = async (req, res) => {
    try {
        const { userId } = req.params
        const posts = await Post.findAll({
            where: { userId },
            include: {
                model: User,
                attributes: ["name"]
            }
        })
        res.status(200).send(posts)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error!" });
    }
}





export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findByPk(id)
        if (!post) {
            return res.status(400).json({ smg: "User not found" });
        }

        const updatePost = await post.update({ ...req.body })
        res.status(200).send(updatePost)


    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error!" });
    }
}


export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findByPk(id)
        if (!post) {
            return res.status(400).json({ smg: "User not found" });
        }

        const deletedPost = await post.destroy()
        res.status(202).send(deletedPost)


    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server error!" });
    }
}