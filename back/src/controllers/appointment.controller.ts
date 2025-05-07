import { Request, Response } from 'express';
import Appointment from '../models/Appointment.model';
import Client from '../models/User.model';
import Professional from '../models/Professional.model';
// import Service from '../models/Service.model';

export const createAppointment = async (req: Request, res: Response): Promise<Response | undefined> => {
  const { clientId, professionalId, serviceId, date, hour, status, type_appointment, payment_method, value, paid } = req.body;

  try {
    // verifica as entidade
    const [client, professional] = await Promise.all([
      Client.findById(clientId),
      Professional.findById(professionalId),
    ])

    if (!client) return res.status(404).json({ error: 'Client not Found!' })
    if (!professional) return res.status(404).json({ error: 'Professional not Found!' })

    const appointmentData = {
      client: clientId,
      professional: professionalId,
      service: null,
      date: new Date(`${date}T${hour}:00`), // Combina data e hora
      hour, // Mantém a hora separada se necessário
      status: status || 'Agendado',
      type_appointment,
      payment_method,
      value,
      paid
    };

    const newAppointment = await Appointment.create(appointmentData)

    return res.status(201).json(newAppointment);

  } catch (error) {
    res.status(500).json({ error: 'Erro em criar agendamento', details: error })
  }
}

export const getAllAppointment = async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find();
    return res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o agendamentos' });
  }
}

export const getAppointmentById = async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'agendamento não encontrado' })
    }
    res.status(200).json(appointment)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao Buscar o agendamento', details: error })
  }
}

export const updateAppointment = async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const { id } = req.params
    const updated = await Appointment.findByIdAndUpdate(id, req.body, {
      new: true
    });
    if (!updated) {
      return res.status(404).json({ message: 'Agendamento não encontrado' });
    }
    return res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o agendamento' })
  }
}

export const deleteAppointment = async (req: Request, res: Response): Promise<Response | undefined> => {

  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!deletedAppointment) return res.status(404).json({ message: "agendamento não encontrado" })
    return res.status(200).json(deletedAppointment);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao deletar o agendamento", details: error })
  }
} 