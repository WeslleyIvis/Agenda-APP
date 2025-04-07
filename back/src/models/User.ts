import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone_number: {type: String, required: true},
    image: {type: String},
    method_login: {type: String, enum: ['email', 'google', 'facebook']},
    appointment_history: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ],
    reviews: [
        {
            date: {type: Date},
            professional: {type: mongoose.Schema.Types.ObjectId, ref: 'Professional'},
            haircut: {type: Array},
            comment: {type: String},
            rating: {type: Number}
        }
    ]
}, {timestamps: true})

export default mongoose.model('User', userSchema);