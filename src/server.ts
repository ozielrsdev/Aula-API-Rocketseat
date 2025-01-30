import express from 'express'

const PORT = 3333

const app = express()
app.use(express.json())

app.get('/products', (request, response) => {
  const { page, limit } = request.query
  response.send(`Pagina ${page} de ${limit}`)
})

app.post('/products', (request, response) => {
  const { name, price } = request.body
  response.send(`Produto: ${name} com o valor de ${price}`)
})
app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`)
)