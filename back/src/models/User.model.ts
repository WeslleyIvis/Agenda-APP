import mongoose, {Document, Schema} from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    phone_number: string;
    image?: string;
    method_login?: 'email' | 'google' | 'facebook';
    appointment_history: mongoose.Types.ObjectId[]
    reviews: mongoose.Types.ObjectId[]
}

const userSchema = new Schema<IUser>({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    phone_number: {type: String, required: true},
    image: {type: String},
    method_login: {type: String, enum: ['email', 'google', 'facebook']},
    appointment_history: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Appointment'
        }
    ],
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reviews'
        }
    ]
}, {timestamps: true})

export default mongoose.model<IUser>('User', userSchema);