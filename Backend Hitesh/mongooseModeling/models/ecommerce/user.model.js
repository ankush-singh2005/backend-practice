import mongoose from "mongoose";
import { timeStamp } from "node:console";
import { type } from "node:os";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    }
}, {timestamps: true})

export const User = mongoose.model("User", userSchema);