import { createSlice } from "@reduxjs/toolkit"

let cartData=JSON.parse(localStorage.getItem('cardData'))||[]

let CartSlice=createSlice({
    name:'cart',
    initialState:cartData,
    reducers:{
        ADDTOCART:(state,action)=>{
            let product=action.payload
            let existingItem=state.find(item=>item.id==product.id);
            if(existingItem){
                existingItem.quantity+=1
            }
            else{
                state.push({...product,quantity:1})
            }
            localStorage.setItem("cartData",JSON.stringify(state))
        },
        DECREMENT:(state,action)=>{
            let productid=action.payload
            let itemindex=state.findIndex(item=>item.id===productid)
            if(itemindex!==-1){
                if(state[itemindex].quantity>1){
                    state[itemindex].quantity-=1
                }
                else{
                    state.splice(itemindex,1)
                }
            }
            localStorage.setItem("cartData",JSON.stringify(state))
        },
        REMOVE:(state,action)=>{
            let updatedCart=state.filter(item=>item.id!==action.payload)
            localStorag.setItem('cartData',JSON.stringify(updatedCart))
            return updatedCart
        }

    }
})
export const {ADDTOCART,DECREMENT,REMOVE}=CartSlice.actions
export default CartSlice.reducer