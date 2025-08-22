import express from 'express'
import routesFilmes from './routes/filmes'
const app = express()
const port = 3000

app.use(express.json())
app.use("/filmes", routesFilmes)

app.get('/', (req, res) => {
  res.send('API: Cadastro de Filmes')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})