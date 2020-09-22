import mongoose, { Schema } from "mongoose";

const dialogSchema = new Schema({
    users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    last_message: {type: Schema.Types.ObjectId, ref: 'message'}
},
    { timestamps: true }
)

export const Dialog = mongoose.model('dialog', dialogSchema);