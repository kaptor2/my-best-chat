import mongoose, { Schema } from "mongoose";
import validator from 'validator';

export type IUserSchema = {
    email: string,
    avatar: string,
    fullname: string,
    password: string,
    confirmed: boolean,
    confirm_hash: string,
    createdAt: Date,
    updatedAt: Date
}

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
        type: Boolean,
        default: false
    },
    confirm_hash: String,
    last_seen: Date
},
    { timestamps: true }
)

export const User = mongoose.model('users', userSchema);