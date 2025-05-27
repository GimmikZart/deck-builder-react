// src/pages/CardsList.jsx
import React from 'react'
import Card from '../components/Card'
import CardsList from '../components/CardsList'
import cardsListFromJson from '../assets/cardsList.json'

export default function AllCards() {
  return (
    <CardsList
      data={cardsListFromJson}
      itemsPerPage={20}
      renderItem={card => <Card card={card} />}
    />
  )
}
