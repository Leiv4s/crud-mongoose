require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose;
const { randomUUID } = require('crypto');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Conectado com o MongoDB');

  const ocorrenciaSchema = new Schema({
    _id: {
      type: 'UUID',
      default: () => randomUUID()
    },
    titulo: String,
    descricao: String,
    tipo: {
      type: String,
      enum: ['Assalto', 'Sequestro', 'Homicídio', 'Outros']
    },
    data: {
      type: Date,
      default: new Date()
    },
    localizacao: {
      type: {
        type: String, 
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    }
  });

  ocorrenciaSchema.index(
    {titulo: 'text', descricao:'text'},
    {default_language: 'pt', weights:{titulo:2, descricao:1}}
  );

  const Ocorrencia = mongoose.model('ocorrencias', ocorrenciaSchema);

  const ocorrencia = {
    titulo: 'Assalto perto do IFPB',
    descricao: 'Levaram meu celular',
    tipo: 'Assalto',
    localizacao: {
      type:'Point',
      coordinates: [-38.54499, -6.88832]
    }
  }
  Ocorrencia.create(ocorrencia).then(retorno =>{
    console.log(retorno);
  }).catch(error =>{
    console.log(error);
  });

}