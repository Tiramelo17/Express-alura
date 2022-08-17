import  conn from '../config/dbConnect.js'
import ModelLivro from '../model/LivrosSchema.js'
import uni from 'uniqid'


class LivroRepository {

  
  static inserir = async (livro) => {
    const livroModel = new ModelLivro(livro)
    livroModel._id = uni()
    console.log(livroModel)
    const livroAux = await buscarLivroId(livro._id)
    if(livroAux){
      return "livro já cadastrado"
    }
    const novoLivro = await livroModel.save()
    
    return novoLivro
  } 
  
  
  
  static buscarLivroId = async (id) => {
    const livro = await ModelLivro.findById(id).populate("autor")
    return livro
  }
  

  static buscarLivro = async () => {
    console.log('Iniciando Buscar Livro')
    const livro = await ModelLivro.find().populate('autor')
    console.log('finalizando Buscar Livro '+ livro)
    return livro
  }
  
  static excluir = async (id) => {
    try{
      const livro = await ModelLivro.findByIdAndRemove(id).populate("autor")
      return livro

    } catch{
      throw Error
    }
    
  }
  
  
  static atualizar = async (livro) => {
      console.log(livro)
      await ModelLivro.findByIdAndUpdate(livro._id,livro)
      return await buscarLivroId(livro._id)
  
}


}

const buscarLivroId = async (id) => {
  const livro = await ModelLivro.findById(id).populate('autor')
 return livro
}


export default LivroRepository

