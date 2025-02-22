import { NextResponse } from "next/server"
// import db from "@/lib/db"
import db from '@/lib/db';
import { getServerSession } from "next-auth";
import { authOptions } from "@/auth";

// export async function GET(req: Request) {
//     // // const id = searchParams.get("id")
//     // if (!id) {
//     //     return NextResponse.json({ message: "No id provided" }, { status: 400 })
//     // }
//     const product = await db.product.findUnique({
//         where: {
//             id: parseInt(id),
//         },
//     })
//     if (!product) {
//         return NextResponse.json({ message: "Product not found" }, { status: 404 })
//     }
//     return NextResponse.json(product)
// }

export async function POST(req: Request) {
    const body = await req.json()
    const session =await getServerSession(authOptions)
    const userId=session?.user?.id
    try {
        if(!userId){
            return NextResponse.json({ message: "User not found" }, { status: 404 })
        }
    const product = await db.product.create({
        data: {
           ...body,
           userId:userId
        },
    })
    return NextResponse.json(product)
} catch (error) {
    // console.log(error)
    return NextResponse.json(error)
    
}
}

export async function GET(req: Request) {
 try {
    const product = await db.product.findMany()
 
    return NextResponse.json(product)
 } catch (error) {
    
 }
 
  
}