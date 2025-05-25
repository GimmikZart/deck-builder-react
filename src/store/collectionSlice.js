// src/store/collectionSlice.js
import { createSlice } from '@reduxjs/toolkit'

const collectionSlice = createSlice({
  name: 'collection',
  initialState: [],   // array di oggetti carta
  reducers: {
    addCard: (state, action) => {
      console.log('AGGIUNTOOO');
      
      const card = action.payload
      if (!state.find(item => item.id === card.id)) {
        state.push(card)
      }
    },
    removeCard: (state, action) => {
      const cardId = action.payload
      return state.filter(item => item.id !== cardId)
    },
    resetCollection: () => []
  }
})

export const { addCard, removeCard, resetCollection } = collectionSlice.actions
export default collectionSlice.reducer

export const selectIsInCollection = (state, cardId) =>
  state.collection.some(item => item.id === cardId)

