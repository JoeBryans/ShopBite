import { PayloadAction, createSlice } from "@reduxjs/toolkit"
export interface CartItem{
    id:number,
    title:string,
    price:string,
    category:string,
    description:string,
    image:string,
    qty:number,
    rating:{rate:number,count:number}
}
export interface ShippingAddress{
    country:string,
    state:string,
    city:string,
    zipcode: string
    address:string
}
interface CartState{
    cartItems:CartItem[]
    shippinInfo:ShippingAddress
}
const initialState:CartState={
    // cartItems:[]
    cartItems:localStorage.getItem("cartItems") as string 
    ? JSON.parse(localStorage.getItem("cartItems")||"")
    : [],
    shippinInfo:localStorage.getItem("shippinInfo") as string 
    ? JSON.parse(localStorage.getItem("shippinInfo")||"")
    : {address:"",city:"",state:"",zipcode:"",country:""}
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<Omit<CartItem,"qty">>)=>{
            const existItems=state.cartItems.find(item=>item.id===action.payload.id)
            if(existItems){
                existItems.qty+=1
            }else{
                state.cartItems.push({...action.payload,qty:1})
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        removeFromCart:(state,action:PayloadAction<{id:number}>)=>{
            const existItems=state.cartItems.find(item=>item.id===action.payload.id)
            if(existItems && existItems.qty>1){
                existItems.qty -=1
            }
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

        },
        deleteFromCart:(state,action:PayloadAction<{id:number}>)=>{
            const existItems=state.cartItems.filter(item=>item.id!==action.payload.id)
            state.cartItems=existItems
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))

                
           
        },
        clearCart:(state)=>{
            state.cartItems=[]
            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },
        addShippinAddress:(state,action:PayloadAction<ShippingAddress>)=>{
            state.shippinInfo=action.payload
            localStorage.setItem("shippinInfo",JSON.stringify(state.shippinInfo))
        },
        removeShippinAddress:(state)=>{
            state.shippinInfo={address:"",city:"",state:"",zipcode:"",country:""}
            localStorage.setItem("shippinInfo",JSON.stringify(state.shippinInfo))

        }
    }
})
export const {addToCart,removeFromCart,deleteFromCart,clearCart,addShippinAddress,removeShippinAddress}=cartSlice.actions
export default cartSlice.reducer