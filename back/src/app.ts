import express from 'express';
import cors from 'cors'
import professionalRouter from './routes/professional.routes';

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API funcionando! 🚀');
});

app.use('/api/professionals', professionalRouter)

export default app


