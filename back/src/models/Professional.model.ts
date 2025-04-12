import mongoose, {Document, Schema} from "mongoose";
import bcrypt from 'bcryptjs'

export interface IWorkingHour {
    day:  'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
    start: string;
    end: string
}

export interface IProfessional extends Document {
    name: string;
    email: string;
    password: string;
    phone_number: string;
    image?: string;
    working_hours: IWorkingHour[];
    role: 'admin' | 'professional';
    linked_agenda: mongoose.Types.ObjectId[]
    rewards_received: mongoose.Types.ObjectId[]
}

const professionalSchema = new Schema<IProfessional>({
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
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ],

    rewards_received: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reviews'
        }
    ]
}, {timestamps: true})

// Encriptação da senha 😎
professionalSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
        next()
    } catch(err) {
        return next (err as any)
    }
})

export default mongoose.model<IProfessional>('Professional', professionalSchema)