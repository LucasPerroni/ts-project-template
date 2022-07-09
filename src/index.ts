import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import "express-async-errors"

import routes from "./routes/index.js"
import errorHandler from "./middlewares/errorHandler.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.use(errorHandler)

const port = +process.env.PORT || 4000
app.listen(port, () => {
  console.log("Server is running")
})
