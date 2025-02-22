import Stripe from "stripe"
import { NextResponse } from "next/server"
import db from "@/lib/db"


export async function POST(req: Request) {
        const stripe=new Stripe(process.env.STRIPE_SECRET_KEY as string)

    const body = await req.text()
    const sig=req.headers.get("Stripe-Signature") as string
  
    
    
    const webhookSecret = process.env.STRIPE_WEBHOOK_KEY as string

   let event:Stripe.Event;
    try {
        event = stripe.webhooks.constructEvent(
            body,
            sig,
            webhookSecret
        )
      
    }
     catch (error) {
        
      return NextResponse.json(error)  
    }
                    const paymentEvent = event.data.object as Stripe.PaymentIntent
                    console.log("paymentEvent :",paymentEvent)
 if (event.type === "payment_intent.succeeded") {
        console.log("payment successfull",paymentEvent.id)
        
            await db.order.update({
                where: { paymentIntentId: paymentEvent.id },
                data: {
                    paymentStatus: "paid"
                
                }
            })

        } else if (event.type === "payment_intent.payment_failed") {
            const paymentEvent = event.data.object as Stripe.PaymentIntent
            console.log(paymentEvent)
        
            await db.order.update({
                where: { paymentIntentId: paymentEvent.id },
                data: {
                    paymentStatus: "faild"
                
                }
            })
        }
        return NextResponse.json({ received: true })
}

