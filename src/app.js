import express  from "express";
import cors from "cors"
import productsRoutes from "./routes/products.routes.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({
    // en modo produccion
    origin: 'https://bobo-cl-front.vercel.app',
     // en modo dev
    // origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization',"Cookie"],
    credentials: true
}))

app.use("/api", productsRoutes)

export default app