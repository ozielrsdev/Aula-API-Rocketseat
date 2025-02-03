import { Request, Response } from 'express'
import { AppError } from '../utils/AppError'

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
    const { name, price } = request.body
    // response.send(`Produto: ${name} com o valor de ${price}`)
    // throw new Error("Erro na ROTA")
    // throw new AppError("Erro ao tentar criar um produto!", 401)
    response.status(201).json({ name, price, user_id: request.user_id })
  }
}