import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const {
    MYSQL_HOST,
    MYSQL_PORT,
    MYSQL_USERNAME,
    MYSQL_PASSWORD,
    MYSQL_DATABASE,
} = process.env;

export const sequelize = new Sequelize({
    dialect: "mysql",
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    username: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
    logging: false,
});

sequelize
    .authenticate()
    .then(() => {
        console.log("successfully connected to database ✅");
    })
    .catch((error) => {
        console.log("error connecting to database: ", error);
    });
