import mongoose from 'mongoose'


const connectDb = async()=>{
    if (mongoose.connection.readyState >= 1)return;

    try{
        await mongoose.connect(process.env.MONGODB_URI!,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }as any)
        console.log("connected to db")
    }catch(error){
        console.error("MongoDB connection error:",error)
        process.exit(1)
    }
}

export default connectDb;