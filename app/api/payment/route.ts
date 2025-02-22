import Strip from "stripe"
import {stripe} from "@/lib/stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import db from "@/lib/db"


export  async function POST(req:Request){
    const stripe=new Strip(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string)
    const body=await req.json()
    const {items,paymentIntent_id}=body

    try {
     if(paymentIntent_id){
      const payment=await stripe.paymentIntents.retrieve(paymentIntent_id)
      // console.log(payment)
      // if(payment.status==="succeeded"){
      //   const customer=await stripe.customers.create({
      //     email:payment.metadata.email,
      //     source:payment.payment_method
      //   })

        // console.log(customer)
        // return NextResponse.json({customer:customer})
      }
      
    //  else{
          const payment = await stripe.paymentIntents.create({
          amount:300*100,
          currency:"eur",
          automatic_payment_methods:{enabled:true}
        });
        console.log({clientSecret:payment.client_secret});
        return  NextResponse.json({clientSecret:payment.client_secret})

      //   const order:any={
      //     items:items,
      //     paymentIntent_id:payment.id,
      //     total_price:payment.amount,
      //     email:payment.metadata.email,
      //     qty:items.length

      //   }
      //   const orderData=await db.order.create({
      //     data:order
      //   })
      //  console.log(orderData)

      // }
    } 
    catch (error) {
        return NextResponse.json(error)
    }
}