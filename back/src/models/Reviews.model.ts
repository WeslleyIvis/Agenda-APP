import mongoose, {Document, Schema} from "mongoose";

export interface IReview extends Document {
    date: Date;
    client: mongoose.Types.ObjectId;
    professional: mongoose.Types.ObjectId;
    haircut: mongoose.Types.ObjectId;
    comment?: string;
    rating: number
}

const reviewSchema = new Schema<IReview>({
    date: {type: Date},
    client: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        require: true
    },
    professional: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Professional', 
        require: true
    },
    haircut: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref:'Service', 
        }
    ],
    comment: {type: String},
    rating: {type: Number, min: 1, max: 5, required: true}
})

export default mongoose.model<IReview>('Review', reviewSchema)