import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    date: {type: Date},
    client: {
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User', 
        require: true
    },
    Professional: {
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
    rating: {type: Number, min: 1, max: 5}
})

export default mongoose.model('Review', reviewSchema)