import express from 'express';
import cors from 'cors'
import professionalRouter from './routes/professional.routes';
import authRouter from './routes/auth.routs';
import userRouter from './routes/user.routes';

const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API funcionando! 🚀');
});

app.use('/api/professionals', professionalRouter)

app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)

export default app

