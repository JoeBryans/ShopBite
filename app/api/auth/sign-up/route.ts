import db from "@/lib/db"
import {NextResponse} from "next/server"
import bcryptjs from "bcryptjs"

export async function POST(req:Request){
    const body=await req.json()
    const {email,password}=body
    try {
        const existUser = await db.user.findUnique({ where: { email: email } })
        if (existUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 })
        }
        const passwordHash = await bcryptjs.hash(password ?? '', 10)
        const user = await db.user.create({
            data:{
                ...body,
                password:passwordHash,
                
            }
        })
        return NextResponse.json(user)
    } catch (error) {
        
        return NextResponse.json(error)
    }
}