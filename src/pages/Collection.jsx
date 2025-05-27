// src/pages/Collection.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import CardsList from '../components/CardsList'
import { CollectionContext } from '../contexts/CardViewContext'

const selectCollection = state => state.collection

export default function Collection() {
  const collection = useSelector(selectCollection)

  return (
    <CollectionContext.Provider value={true}>
      <CardsList
        data={collection}
        itemsPerPage={28}
        renderItem={card => <Card card={card} />}
      />
    </CollectionContext.Provider>
  )
}
