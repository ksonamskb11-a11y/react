import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addToCart: (state,action)=>{
            
            const item = action.payload;
            const id = item.id;
            const existingItem = state.items.find((i)=>i.id === id);

            if(existingItem){
                existingItem.qty+=1;
            }else{
            state.items.push({...item, qty:1})
            }
        },
        removeFromCart:(state,action)=>{
            const item = action.payload;
            const id = item.id;
            state.items = state.items.filter((i) => i.id !== id);
        },
        clearCart:(state)=>{
            state.items = []
        },
        increaseQty:(state,action)=>{
            const item = action.payload;
            const id = item.id;
            const existingItem = state.items.find((i)=>i.id === id);

            if(existingItem){
                existingItem.qty+=1;
            }
        },
        decreaseQty:(state,action)=>{
            const item = action.payload;
            const id = item.id;
            const existingItem = state.items.find((i)=>i.id === id);
            if ( existingItem.qty > 1) {
                existingItem.qty -= 1;
            }else{
                state.items = state.items.filter((i) => i.id !== id);  
            }
        },
    }
})
export const {addToCart, removeFromCart, clearCart, increaseQty, decreaseQty} = cartSlice.actions;
export default cartSlice.reducer;
