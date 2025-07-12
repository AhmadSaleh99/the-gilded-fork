import connectDb from "@/lib/db";
import Booking from "@/models/Booking";
import {sendBookingConfirmationEmail}from '@/lib/emailService'


export const POST = async (req: Request) => {
    await connectDb();

    try{
        const data = await req.json()

        const booking = Booking.create(data)

        // send eamail 

        await sendBookingConfirmationEmail(data)

        return new Response(JSON.stringify(booking), {status:201})

    }catch(error){
        console.error("Booking creation error: ",error)
        let errorMessage = "Booking creation faild.";

        return new Response(JSON.stringify({

            error: "Booking creation faild",
            details: errorMessage
        }),{status:400})
    }
}