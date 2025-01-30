import { Router } from "express";
import { produtsRoutes } from "./products-routes";

export const routes = Router()

routes.use('/products', produtsRoutes)