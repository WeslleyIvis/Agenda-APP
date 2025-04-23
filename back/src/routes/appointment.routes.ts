import { Router } from 'express'
import {
  createAppointment,
  getAllAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} from '../controllers/appointment.controller'


const appointmentRouter = Router()
// @ts-ignore
appointmentRouter.post('/', createAppointment)

// @ts-ignore
appointmentRouter.get('/', getAllAppointment)

// @ts-ignore
appointmentRouter.get('/:id', getAppointmentById)

//@ts-ignore
appointmentRouter.put('/:id', updateAppointment)

//@ts-ignore
appointmentRouter.delete('/:id', deleteAppointment)

export default appointmentRouter;