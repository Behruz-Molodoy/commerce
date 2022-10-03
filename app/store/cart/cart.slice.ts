import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../products/products.types';

const initialState = [] as IProduct[]

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, actions: PayloadAction<IProduct>) => {
            state.push(actions.payload)
        },
        removeItem: (state, actions: PayloadAction<{ id: number }>) => {
            return state.filter(({ id }) => id !== actions.payload.id)
        }
    }
})

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions