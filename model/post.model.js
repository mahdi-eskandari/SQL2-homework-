import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

const Post = sequelize.define(
    "post",
    {
        title: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [5, 100],
            },
        },
        content: {
            type: DataTypes.STRING(500),
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [20, 500],
            },
        }
    }
);

export default Post;
