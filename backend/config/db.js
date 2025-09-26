import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://rahulshyanti37_db_user:eUcV6tmvsqVd0gpG@cluster0.axh0xwn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(()=>{
        console.log("DB connected")
    })

}