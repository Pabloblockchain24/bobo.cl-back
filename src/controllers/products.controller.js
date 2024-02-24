import Product from "../models/product.model.js"

export const getProducts = async(req,res)=>{
    const filtro = req.params.categoriaId
    const products = await Product.find({categoria: filtro})
    res.json(products)
}

export const getDestacados = async(req,res)=>{
    const products = await Product.find({destacado: "Si"})
    res.json(products)
}

export const getProduct = async(req,res)=>{
    const productFound = await Product.findById(req.params.id)
    if(!productFound) return res.status(404).json({messsage:"Producto no encontrado"})
    res.json(productFound)
}


export const buscar = async(req,res)=>{
    const { nombre } = req.query
    try {
        const productos = await Product.find({});
        let productFiltrados = productos.filter((prod) => prod.nombre.toUpperCase().includes(nombre.toUpperCase()))
        res.json(productFiltrados);
    } catch (error) {
                console.error(error);
        res.status(500).json({ message: 'Error al buscar productos' });
    }
}


export const postProduct = async(req,res)=>{
    const  {nombre,img,categoria,descripcion,precio,stock} = req.body
    const newProduct = await Product.create({
        nombre,
        categoria,
        img,
        descripcion, 
        precio, 
        stock,
    })
    res.json(newProduct)
}