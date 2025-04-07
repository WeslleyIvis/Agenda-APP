import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    date: {type: Date, require: true},
    hour: {type: String, require: true},

    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },

    professional: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional',
        require: true
    },

    service: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Service',
            require: true
        }
    ],

    value: {type: Number},
    status: {
        type: String,
        enum: ['agendado', 'concluido', 'cancelado'],
        default: 'agendado'
    },
    
    paid: {type: Boolean},

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
}, {timestamps: true})

export default mongoose.model('Appointment', appointmentSchema)