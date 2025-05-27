// src/pages/CardsList.jsx
import React from 'react'
import Card from '../components/Card'
import CardsList from '../components/CardsList'
import cardsListFromJson from '../assets/cardsList.json'
import { CollectionContext } from '../contexts/CardViewContext'

export default function AllCards() {
  return (
    <CollectionContext.Provider value={false}>
      <CardsList
        data={cardsListFromJson}
        itemsPerPage={28}
        renderItem={card => <Card card={card} />}
      />
    </CollectionContext.Provider>
  )
}
