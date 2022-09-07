import express from 'express'

const app = express()

app.use(express.json())

app.listen(8080, ()=>
  console.log('Servidor funcionando na porta: 8080')
)