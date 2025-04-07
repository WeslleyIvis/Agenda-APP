import mongoose, {Document, Schema} from "mongoose";

export interface IService extends Document {
    name: string;
    duration: number;
    value: number;
    professional_avaliable: mongoose.Types.ObjectId;
    description: string
}

const serviceSchema = new Schema<IService>({
    name: {type: String, required: true},
    duration: {type: Number},
    value: {type: Number},
    professional_avaliable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional'
    },
    description: {type: String}
}, {timestamps: true})

export default mongoose.model<IService>('Service', serviceSchema);