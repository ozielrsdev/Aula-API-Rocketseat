import { Request, Response } from 'express'
import { AppError } from '../utils/app-error'
import { z } from 'zod'
export class ProductsController {
  /**
   * index - Get para Listar varios registros
   * show - Get para Listar registro especifico
   * create - Post para criar um registro
   * update - Put para atualizar um registro
   * remove - delete para deletar um registro
   */

  index(request: Request, response: Response) {
    const { page, limit } = request.query

    response.send(`Pagina ${page} de ${limit}`)
  }

  create(request: Request, response: Response) {
    const bodySchema = z.object({
      name: z
        .string({ required_error: "Name is Required!" })
        .trim()
        .min(6, { message: "Name must be 6 or more characters" }),
      price: z.number({ required_error: "Price is Required!" })
        .positive({ message: "Price must be Positive" }),
    })
    const { name, price } = bodySchema.parse(request.body)
    // throw new Error("Erro na ROTA")
    // throw new AppError("Erro ao tentar criar um produto!", 401)
    response.status(201).json({ name, price, user_id: request.user_id })
  }
}