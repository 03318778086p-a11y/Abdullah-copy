import mongoose from "mongoose";


const dbconnect=async()=>{
    await mongoose.connect("mongodb://localhost:27017/perr")
    console.log("mongoose is  running");
    
}
export default dbconnect