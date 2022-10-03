import { createSlice } from '@reduxjs/toolkit'
import { Card } from 'theme-ui'

// create react initial state, reducer, actions 
// using redux toolkit which is the new way to write the redux store
export const StoreSlice = createSlice({
  name: 'store',
  initialState: {
    storeFilter: {
      cardSetFilter: '',
      rarityFilter: '',
      typeFilter: '',
      nameFilter: ''
    },
    cart: [] as any[]
  },
  reducers: {
    filterCardSet: (state, action) => {
      console.log('filterCardSet')
      state.storeFilter.cardSetFilter = action.payload
    },
    filterRarity: (state, action) => {
      state.storeFilter.rarityFilter = action.payload
    },
    filterType: (state, action) => {
      state.storeFilter.typeFilter = action.payload
    },
    filterName: (state, action) => {
      state.storeFilter.nameFilter = action.payload
    }, 
    addCart: (state, action) => {
      state.cart = [...state.cart, action.payload]
    },
    clearCart: (state) => {
      state.cart = []
    },
    changeQty: (state, action) => {
      // passing the change amount to support change in more step number in the future
      const id = action.payload.id
      const change = action.payload.change
      const index = state.cart.findIndex((elem)=> elem.id === id )
      const copiedCart = [...state.cart]
      copiedCart[index].qty = copiedCart[index].qty + change
      state.cart = copiedCart
    }
  },
})

export const { filterCardSet, filterRarity, filterType, filterName, addCart, clearCart, changeQty } = StoreSlice.actions

export default StoreSlice.reducer