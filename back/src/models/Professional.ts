import mongoose from "mongoose";

const professionalSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone_number: {type: String, required: true},
    image: {type: String},
    working_hours: [
        {
            day: {type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']},
            start: {type: String}, // ex: '09:00'
            end: {type: String}
        }
    ],

    role: {
        type: String, 
        enum: ['admin', 'professional'], 
        default: 'professional'
    },

    linked_agenda: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ],

    rewards_received: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reviews'
        }
    ]
}, {timestamps: true})

export default mongoose.model('Professional', professionalSchema)