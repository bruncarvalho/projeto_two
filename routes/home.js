
import { Router } from "express"

const router = Router()

router.get("/", (req, res) =>{
  res.send('<h3>Página Home</h3')
})

export{router}