require('dotenv').config();
const mongoose = require('mongoose');
<<<<<<< HEAD
const { Schema } = mongoose;
const {randomUUID} = require('crypto')
=======
const {Schema} = mongoose;
const { randomUUID } = require('crypto');
>>>>>>> 2809d1c560d24fd3338c20248a2cf4c0b374cd54

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Conectado com o MongoDB');

<<<<<<< HEAD

=======
>>>>>>> 2809d1c560d24fd3338c20248a2cf4c0b374cd54
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
<<<<<<< HEAD
    {titulo:'text', descricao:'text'},
    {default_language: 'pt', weights: {titulo:2, descricao:1}})
  
  const ocorrencia = mongoose.model('ocorrencias', ocorrenciaSchema)
  
  ocorren1 = {
    titulo: 'assalto na esquina do IFPB',
    descricao: 'Duas motos em um cara',
    tipo: 'Assalto',
    localizacao: {type: 'Point', coordinates: [-38.54564, -6.89057]}
  }

  ocorren2 = {
    titulo: 'assalto perto do IFPB',
    descricao: 'roubaram a honra de lúcio',
    tipo: 'Assalto',
    localizacao: {type: 'Point', coordinates: [-38.54497, -6.88057]}
  }

//  ocorrencia.create(ocorren1).then(retorno => {console.log(retorno)}).catch(error => {console.log(error)})

  // ocorrencia.create(ocorren2).then(retorno => {console.log(retorno)}).catch(error => {console.log(error)})

  ocorrencia.find({$text:{$search:'honra'}},{titulo:1,descricao:1,_id:0}).then(ocorrencias => {console.log(ocorrencias)}).catch(error => {console.log(error)})
  
  console.log(ocorrencia);


}


=======
    {titulo: 'text', descricao:'text'},
    {default_language: 'pt', weights:{titulo:2, descricao:1}}
  );

  const Ocorrencia = mongoose.model('ocorrencias', ocorrenciaSchema);

  // const ocorrencia = {
  //   titulo: 'Assalto perto do IFPB',
  //   descricao: 'Levaram meu celular',
  //   tipo: 'Assalto',
  //   localizacao: {
  //     type:'Point',
  //     coordinates: [-38.54499, -6.88832]
  //   }
  // }
  // Ocorrencia.create(ocorrencia).then(retorno =>{
  //   console.log(retorno);
  // }).catch(error =>{
  //   console.log(error);
  // });

  Ocorrencia.find({$text:{$search:'assalto'}},
    {titulo:1,localizacao:1, _id:0})
  .then(ocorrencias =>{
    console.log(ocorrencias);
  }).catch(error =>{
    console.log(error);
  });

}
>>>>>>> 2809d1c560d24fd3338c20248a2cf4c0b374cd54
