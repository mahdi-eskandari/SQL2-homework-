import express from "express"
const app = express()

import dotenv from "dotenv"
dotenv.config()

import { sequelize } from "./db/connection.js"
import userRouter from "./router/user.router.js"
import postRouter from "./router/post.router.js"

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/users', userRouter)
app.use('/', postRouter)


sequelize.sync({ force: true })
    .then(() => {
        console.log("synced successfully ✅");
    }).catch(() => {
        console.log("error synced ❌", error);
    })

const port = process.env.SERVER_PORT || 3001
app.listen(port, () => {
    console.log(`running is server on port ${port} ✔`);
})
