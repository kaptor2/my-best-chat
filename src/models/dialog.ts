import mongoose, { Schema } from "mongoose";

const dialogSchema = new Schema({
    users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
    lastMessage: {type: Schema.Types.ObjectId, ref: 'message'}
},
    { timestamps: true }
)

export const Dialog = mongoose.model('Dialog', dialogSchema);