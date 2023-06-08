import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"

import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"

import dotenv from "dotenv"

import clientRoutes from "./routes/client.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"
import salesRoutes from "./routes/sales.js"

// data imports
import User from "./models/User.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
import Transaction from "./models/Transaction.js"
import OverallStat from "./models/OverallStat.js"
import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataTransaction,
  dataOverallStat,
} from "./data/index.js"

dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)

const port = process.env.PORT || 8080
const uri = process.env.MONGODB_URI
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
      // Add Once (Insert Proxy Data to MongoDB)
      // User.insertMany(dataUser)
      // Product.insertMany(dataProduct)
      // ProductStat.insertMany(dataProductStat)
      // Transaction.insertMany(dataTransaction)
      // OverallStat.insertMany(dataOverallStat)
    })
  })
  .catch((err) => {
    console.log(`${err} did not connect`)
  })
