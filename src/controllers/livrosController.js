import LivrosRepository from '../repository/LivrosRepository.js'

class LivroContoller {

    static buscarLivro = async (req, res) => {
        console.log("Livros Controller")
        try{
            res.status(200).json(await LivrosRepository.buscarLivro())
        } catch(e) {
            console.log(e)
            res.status(500).json({msg: e.message})
        } 

    }

    static excluirLivros = async (req, res) => {
        console.log("Livros Controller")
        try{
            res.status(200).json(await LivrosRepository.excluir(req.body._id))
        } catch(e) {
            console.log(e)
            res.status(500).json({msg: e.message})
        } 

    }
    static inserirLivro = async (req, res) => {
        console.log("Livros Controller")
        try{
            const livroInserido = await LivrosRepository.inserir(req.body)
            res.status(200).json(livroInserido)
        } catch(e) {
            console.log(e)
            res.status(500).json({msg: e.message})
        } 

    }

    static atualizarLivro = async (req, res) => {
        console.log("Livros Controller")
        try{
            const livroInserido = await LivrosRepository.atualizar(req.body)
            res.status(200).json(livroInserido)
        } catch(e) {
            console.log(e.message)
            res.status(500).json({msg: e.message, status: 500})
        } 

    }

}

export default LivroContoller