import express from "express"
import LivroContoller from "../src/controllers/livrosController.js"
import LivroRepository from "../src/repository/LivrosRepository.js"


const router = express.Router()

  router
  .get("/livros", LivroContoller.buscarLivro)
  .post("/livros", LivroContoller.inserirLivro)
  .delete("/livros", LivroContoller.excluirLivros)
  .put("/livros", LivroContoller.atualizarLivro)

export default router 


