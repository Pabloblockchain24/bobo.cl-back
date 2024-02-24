import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre:String,
    img: String,
    categoria: String,
    descripcion: String,
    precio: Number,
    stock: Number,
    destacado: String

})

const Product = mongoose.model("Product", productSchema)

export default Product