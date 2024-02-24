import {Router} from "express"
const router = Router()
import {getProducts, getProduct, postProduct, getDestacados, buscar} from "../controllers/products.controller.js"

router.get("/products/categoria/destacados", getDestacados)

router.get("/products/categoria/:categoriaId", getProducts)
router.get("/products/:id", getProduct)
router.get("/buscar", buscar)

router.post("/products",postProduct)

export default router
