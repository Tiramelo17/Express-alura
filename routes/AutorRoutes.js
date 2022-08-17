import express from "express"
import AutorContoller from "../src/controllers/AutorController.js"


const router = express.Router()

  router
  .get("/autor", AutorContoller.buscarAutor)
  .post("/autor", AutorContoller.inserirAutor)
  .delete("/autor", AutorContoller.excluirAutor)
  .put("/autor", AutorContoller.atualizarAutor)

export default router 


