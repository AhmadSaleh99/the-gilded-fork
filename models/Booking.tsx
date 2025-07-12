import mongoose from "mongoose";


const bookingSchema = new mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true},
guests:{type:Number,required:true,min:1,max:20},
date:{type:Date,required:true},

})


export default mongoose.model("Booking",bookingSchema) || mongoose.models.Booking