import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    name: {type: String, require: true},
    duration: {type: Number},
    value: {type: Number},
    professional_avaliable: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Professional'
    },
    description: {type: String}
}, {timestamps: true})

export default mongoose.model('Service', serviceSchema);