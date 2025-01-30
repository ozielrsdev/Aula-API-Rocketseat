import { Router } from 'express'
import { myMiddleware } from '../middlewares/my-middleware'
import { ProductsController } from '../controllers/products-controller'

export const produtsRoutes = Router()
const productsController = new ProductsController()

produtsRoutes.get('/', productsController.index)

// middleware em rota especifica
produtsRoutes.post('/', myMiddleware, productsController.create)