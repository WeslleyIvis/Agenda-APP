import express from 'express';
import cors from 'cors'
import professionalRouter from './routes/professional.routes';
import authRouter from './routes/auth.routs';
import userRouter from './routes/user.routes';
import AppointmentRouter from './routes/appointment.routes';
import serviceRouter from './routes/service.routes';
import reviewRouter from './routes/review.routes';
const app = express();

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API funcionando! 🚀');
});

app.use('/api/professionals', professionalRouter)
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/appointments', AppointmentRouter)
app.use('/api/services', serviceRouter)
app.use('/api/review', reviewRouter)
export default app


