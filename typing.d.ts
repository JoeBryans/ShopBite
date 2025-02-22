import { User } from "@prisma/client"

export type Product={
    id:string,
    title:string,
    price:number,
    quantity:number,
    qty:number,
    image:[{url:string}],
    description:string, 
    category:string,
    brand:string,
    discount:number,
    discountType:string,
    tax:number,
    taxType:string, 
    shipping:number,
    shippingType:string,
    total:number,   
    status:string,
    createdAt:string,
    updatedAt:string,
    rating:{
        rate:number,
        count:number
    }
    
}

declare module "next-auth" {
    interface Session {
        user: User
    }
}
declare module "next-auth/jwt" {
    interface JWT{
        user:User
    }
}