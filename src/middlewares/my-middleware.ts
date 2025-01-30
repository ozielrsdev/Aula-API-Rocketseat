import { Request, Response, NextFunction } from 'express'

export function myMiddleware(request: Request, response: Response, next: NextFunction) {
  request.user_id = '123' // adicionando um id de usuário ao request
  console.log("Passou pelo Middleware");

  return next()
}