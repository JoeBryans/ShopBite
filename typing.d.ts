import { User } from "@prisma/client"

export type Product={
    id:string,
    title:string,
    price:number,
    quantity:number,
    qty:number,
    image:[{url:string}],
    images:[string],
    description:string, 
    category:string,
    brand:string,
    discount:number,
    discountPercentage:string,
    stock:number,
    tax:number,
    taxType:string, 
    shipping:number,
    shippingInformation:string,
    warrantyInformation:string,
    total:number,   
    availabilityStatus:string,
    createdAt:string,
    updatedAt:string,
    rating:number
    reviews: [any]
    returnPolicy: string,
    dimensions:[any]
    
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