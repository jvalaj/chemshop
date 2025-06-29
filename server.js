import express from "express"
import colors from "colors";
import dotenv from 'dotenv';
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from "./routes/categoryRoutes.js"
import cors from 'cors';
import productRoutes from "./routes/productRoutes.js"
import paymentRoutes from "./routes/paymentRoutes.js"
import path from 'path';
//configure env
dotenv.config();
const __dirname = path.resolve();

//database config
connectDB();

//rest object
const app = express()

//middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
//routes
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/category', categoryRoutes)
app.use('/api/v1/product', productRoutes)
app.use('/api/v1/payment', paymentRoutes)

//static files
app.use(express.static(path.join(__dirname, "./client/build")))
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})
//rest api
app.get("/", (req, res) => {
    res.send({
        message: "Welcome to app"
    })
})
app.get("/api/v1/getkey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.bgCyan.white)
})