import mongoose, { Document, Schema } from "mongoose";

export interface IAppointment extends Document {
  date: Date;
  hour: string;
  client: mongoose.Types.ObjectId;
  professional: mongoose.Types.ObjectId;
  service: mongoose.Types.ObjectId[];
  value: number;
  status: 'Agendado' | 'Concluído' | 'Cancelado';
  paid: boolean;
  payment_method: 'Cartão' | 'Pix' | 'Dinheiro';
  type_appointment: 'App' | 'Whatsapp';
}

const appointmentSchema = new Schema<IAppointment>({
  date: { type: Date, required: true }, 
  hour: { type: String, required: true },

  client: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  professional: {
    type: Schema.Types.ObjectId,
    ref: 'Professional',
    required: true
  },

  service: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Service',
      required: true
    }
  ],

  value: { type: Number },

  status: {
    type: String,
    enum: ['Agendado', 'Concluído', 'Cancelado'],
    default: 'Agendado'
  },

  paid: { type: Boolean },

  payment_method: {
    type: String,
    enum: ['Cartão', 'Pix', 'Dinheiro'],
    default: 'Dinheiro'
  },

  type_appointment: {
    type: String,
    enum: ['App', 'Whatsapp'],
    default: 'App'
  }

}, { timestamps: true });

export default mongoose.model<IAppointment>('Appointment', appointmentSchema);
