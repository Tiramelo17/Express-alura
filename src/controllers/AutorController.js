import AutorRepository from "../repository/AutorRepository.js"

class AutorContoller {

    static buscarAutor = async (req, res) => {
        console.log("Autor Controller")
        try{
            res.status(200).json(await AutorRepository.buscarAutor())
        } catch(e) {
            console.log(e)
            res.status(500).json({msg: e.message})
        } 

    }

    static excluirAutor = async (req, res) => {
        console.log("Autor Controller")
        try{
            res.status(200).json(await AutorRepository.excluir(req.body._id))
        } catch(e) {
            console.log(e)
            res.status(500).json({msg: e.message})
        } 

    }
    static inserirAutor = async (req, res) => {
        console.log("Autor Controller")
        try{
            const autorInserido = await AutorRepository.inserir(req.body)
            res.status(200).json(autorInserido)
        } catch(e) {
            console.log(e)
            res.status(500).json({msg: e.message})
        } 

    }

    static atualizarAutor = async (req, res) => {
        console.log("Autor Controller")
        try{
            const autorAtualizado = await AutorRepository.atualizar(req.body)
            res.status(200).json(autorAtualizado)
        } catch(e) {
            console.log(e.message)
            res.status(500).json({msg: e.message, status: 500})
        } 

    }

}

export default AutorContoller