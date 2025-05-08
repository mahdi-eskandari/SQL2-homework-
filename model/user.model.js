import { sequelize } from "../db/connection.js";
import { DataTypes } from "sequelize";

import Post from "../model/post.model.js"

const User = sequelize.define(
    "users",
    {
        name: {
            type: DataTypes.STRING(50),
            allowNull: true,
            validate: {
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                notEmpty: true,
                isEmail: true,
            }
        }
    }
)


User.hasMany(Post, {
    foreignKey: {
        allowNull: false
    }
});
Post.belongsTo(User);

export default User








// {
//   "title": "post one #2",
//   "content": "wevatere ertybrt rtyb"
// }


// {
//     "name": "mahdi",
//     "email": "mahdi@gmail.com"
//   }