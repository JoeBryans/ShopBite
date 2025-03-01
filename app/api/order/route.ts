import Stripe from "stripe"
import { NextResponse } from "next/server"
import db from "@/lib/db"
import { getServerSession } from "next-auth"
import { authOptions } from "@/auth"
import { Order } from "@prisma/client"
import exp from "constants"


export async function POST(req: Request) {
    const session =await getServerSession(authOptions)
      const userId=session?.user?.id
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string)
  console.log(stripe);
  
  const body: any = await req.json()
     if(!userId){
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }
      try {
            
        const payment = await stripe.paymentIntents.create({
          amount:parseInt(body.total)*100,
          currency:"usd",
          automatic_payment_methods: { enabled: true },
          // metadata: 
      
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
          
            const order:Order = await db.order.create({
                data: {
                total_qty :body.totalquantity,   
                total_price:body.total,     
                    orderItem: body.items,
                    userId:userId,
                    paymentStatus: "pending",
                    paymentIntentId: payment.id
                }
            })
        // console.log(order)
       console.log(payment.client_secret)
       return NextResponse.json({clientSecret:payment.client_secret})
    } 
    catch (error) {
         return console.log(error)
        // return NextResponse.json(error)
    }
}

export async function GET(req: Request) {
  //  const session =await getServerSession(authOptions) 
  // const userId = session?.user?.id
  // if (!userId) {
  //   return NextResponse.json({ message: "User not found" }, { status: 404 });
  // }
  // pepped-nicely-cure-thrive

  try {
    const order = await db.order.findMany({ });
    const orderAggregates =await orderAggregate();
    return NextResponse.json({order,orderAggregates});
  } catch (error) {
    return NextResponse.json(error);
  }
}

// order aggregate
async function orderAggregate() {
  
    const order= await db.order.aggregate({
      _sum: {
        total_price: true,
        total_qty: true,
      },
    });
    return order;
 
}