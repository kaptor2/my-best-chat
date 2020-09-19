import mongoose, { Schema } from "mongoose";
import validator from 'validator'

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, 'invalid email'],
        createIndexes: true
    },
    avatar: String,
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmed: {
        type: String,
        default: false
    },
    confirm_hash: String,
    last_seen: Date
},
    { timestamps: true }
)

export const User = mongoose.model('Users', userSchema);