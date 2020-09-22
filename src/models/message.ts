import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema({
    dialog: { type: Schema.Types.ObjectId, ref: 'dialogs',  required: true },
    user: { type: Schema.Types.ObjectId, ref: 'users',  required: true },
    text: String,
    reed: Boolean,
    audio: { type: Schema.Types.ObjectId, ref: 'audios' },
    documents: [{ type: Schema.Types.ObjectId, ref: 'documents' }]
},
    { timestamps: true }
)

export const Message = mongoose.model('message', messageSchema);