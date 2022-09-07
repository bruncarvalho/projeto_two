import express from 'express'
import { router } from '../routes/home.js'
const app = express()


app.use(express.json())


app.use(router)

app.listen(8080, ()=>
  console.log('Servidor funcionando na porta: 8080')
)

