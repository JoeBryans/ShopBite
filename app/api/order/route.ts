import Stripe from "stripe"
import { NextResponse } from "next/server"
import db from "@/lib/db"


export  async function POST(req:Request){
    const stripe=new Stripe(process.env.STRIPE_SECRET_KEY as string)
    const body: any = await req.json()
      try {
            
        const payment = await stripe.paymentIntents.create({
          amount:parseInt(body.total)*100,
          currency:"eur",
            automatic_payment_methods: { enabled: true },
            // mandate_data: {
            //   customer_action: "require",
            //   type: "single_use",
              // payment_method_types: ["card"],
              // payment_method_types: ["us_bank_account"],
              // payment_method_types: ["us_bank_account", "us_bank_account_in_name"],
              // payment_method_types: ["us_bank_account", "us_bank_account_in_name", "us_bank_account_in_name"],   
        //   },
        });
          console.log("orders payment api:",payment);
          
            const order:any = await db.order.create({
                data: {
                total_qty :body.totalquantity,   
                total_price:body.total,     
                    orderItem: body.items,
                    userId: "cm76vr77u0000uvl81rmy2fl8",
                    paymentStatus: "pending",
                    paymentIntentId: payment.id
                }
            })
        // console.log(order)
       
        return  NextResponse.json({clientSecret:payment.client_secret})
    } 
    catch (error) {
        return NextResponse.json(error)
    }
}