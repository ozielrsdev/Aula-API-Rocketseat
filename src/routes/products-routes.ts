import { Router } from 'express'
import { myMiddleware } from '../middlewares/my-middleware'

export const produtsRoutes = Router()

produtsRoutes.get('/', (request, response) => {
  const { page, limit } = request.query
  response.send(`Pagina ${page} de ${limit}`)
})

// middleware em rota especifica
produtsRoutes.post('/', myMiddleware, (request, response) => {
  const { name, price } = request.body
  // response.send(`Produto: ${name} com o valor de ${price}`)
  response.status(201).json({ name, price, user_id:request.user_id })
})