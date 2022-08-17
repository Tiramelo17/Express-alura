import mongoose from "mongoose";

const autorSchema = new mongoose.Schema(
  {
    id: {type: Number},
    nome: {type: String, required: true}
  }, {
    versionKey: false
  }
);

const autores= mongoose.model('autores', autorSchema);

export default autores;