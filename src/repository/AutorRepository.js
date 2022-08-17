import  conn from '../config/dbConnect.js'
import ModelAutor from '../model/AutorSchema.js'
import uni from 'uniqid'


class AutorRepository {

  
  static inserir = async (autor) => {
    const autorModel = new ModelAutor(autor)
    console.log(autorModel)
    const autorAux = await buscarAutorId(autor.id)
    if(autorAux){
      return "autor já cadastrado"
    }
    const novoAutor = await autorModel.save()
    
    return novoAutor
  } 
  
  
  
  static buscarAutorId = async (id) => {
    const autor = await ModelAutor.findById(id)
    return autor
  }
  

  static buscarAutor = async () => {
    console.log('Iniciando Buscar autor')
    const autor = await ModelAutor.find()
    console.log('finalizando Buscar autor '+ autor)
    return autor
  }
  
  static excluir = async (id) => {
    try{
      const autor = await ModelAutor.findByIdAndRemove(id)
      return autor

    } catch{
      throw Error
    }
    
  }
  
  
  static atualizar = async (autor) => {
    try {
        novoAutor = await ModelAutor.findByIdAndUpdate(autor._id,autor)
      return novoAutor
    } catch (error) {
      throw error
    }
  
}


}

const buscarAutorId = async (id) => {
  const autor = await ModelAutor.find({id})
 return autor
}


export default AutorRepository

