import mongoose from 'mongoose';
import dotenv from 'dotenv'
import app from './app'

dotenv.config();

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log('Conectado ao MongaoDB!')
    app.listen(3001,  () => {
        console.log(`Servido rodando: http://localhost:3001`)
        })
    })
    .catch((error) => {
        console.log('Erro ao conectar no MongoDB Atlas', error)
    }
)
