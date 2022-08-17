import express from "express"
import LivrosRepository from "./repository/LivrosRepository.js"
import routes from "../routes/index.js"

const app = express()
app.use(express.json())
routes(app)

/* const livros = [
    {id: 1, "titulo": "Senhor dos Aneis ||"},
    {id: 2, "titulo": "Homem Aranha"}
]

app.get('/',(req,res) => {
    const index = buscaLivro(req.body.id)
    res.status(200).json(livros)
})

app.get('/livros', async(req,res) => {
    res.status(200).json(await LivrosRepository.buscarLivro())
})

app.post('/livros', async (req,res) => {
    const livro = await repositoryLivros.inserir(req.body)
    res.status(201).json(livro)
})

app.delete('/livros',(req,res) => {
    const index = buscaLivro(req.body.id)
    livros.splice(index,1)
    res.status(200).json({msg: 'livro '+ req.body.id +' removido com sucesso'})
})

app.put('/livros',(req,res) => {
    const index = buscaLivro(req.body.id)
    livros[index].titulo = req.body.titulo  
    res.status(201).json(livros)
})

const buscaLivro = (id) => {
   return  livros.findIndex(livro => livro.id === id)
}
 */

export default app