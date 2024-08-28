require('dotenv').config();
const mongoose = require('mongoose');
const {Schema} = mongoose;

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

  const Ocorrencia = mongoose.model('ocorrencias', ocorrenciaSchema);
  
  console.log(Ocorrencia);

}