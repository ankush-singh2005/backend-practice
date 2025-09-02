import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        // username: String, //this is standard practice. here we are just assigning the data type
        username: {   //this is industry practice. here we can add multiple properties to the schema
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: [true, "Password is required"],  //array can also be passed. if it is not true then message will be displayed that 'password is required'
            
        },
        

    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);