import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy:{     //since we need the user schema, we need to import it and to do that we need two things, type: mongoose... 
                    // and ref: "User" it should be same as mongoose model of the imported schema
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    subtodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
    ]

}, {timestamps: true});

export const Todo = mongoose.model('Todo', todoSchema);