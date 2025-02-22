import { NextResponse } from "next/server"
import db from '@/lib/db';
import { Product } from "@prisma/client";

export async function GET( {params}:any) {
    const id= params
    
   try {
    const product = await db.product.findFirst({
        where: {
            id: id
        },
    })
    if (!product) {
        return NextResponse.json({ message: "Product not found" }, { status: 404 })
       }
       console.log(product);
       
    return NextResponse.json(product)
   } catch (error) {
       
    return NextResponse.json(error)
    
   }
}

export async function PUT( {params,body}:{params:{id:string},body:any}) {
    const id=await params.id
    const datas=await body.json()
    try {
        const product = await db.product.update({
            where: {
                id: id,
            },
            data: datas,
        })
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json(error)
        
    }
}

export async function DELETE( {params}:{params:{id:string}}) {
    const id=params.id
    try {
        const product = await db.product.delete({
            where: {
                id: id,
            },
        })
        if (!product) {
            return NextResponse.json({ message: "Product not found" }, { status: 404 })
        }
        return NextResponse.json(product)
    } catch (error) {
        return NextResponse.json(error)
        
    }
}