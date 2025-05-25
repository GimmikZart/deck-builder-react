// src/pages/CardsList.jsx
import React, { useState, useEffect, useMemo } from 'react'
import Card   from '../components/Card'
import Filter from '../components/Filter'
import cardsListFromJson from '../assets/cardsList.json'

function CardsList() {
  const [cardsList,   setCardsList]   = useState([])
  const [searchTerm,  setSearchTerm]  = useState('')
  const [colorFilter, setColorFilter] = useState('')
  const [typeFilter,  setTypeFilter]  = useState('')

  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  useEffect(() => {
    setCardsList(cardsListFromJson)
  }, [])

  const filteredCards = useMemo(() => {
    return cardsList.filter(card => {
      const matchesSearch = card.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const matchesType = typeFilter
        ? card.type === typeFilter
        : true
      const matchesColor = colorFilter
        ? card.color === colorFilter
        : true

      return matchesSearch && matchesType && matchesColor
    })
  }, [cardsList, searchTerm, typeFilter, colorFilter])

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage)

  const paginatedCards = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filteredCards.slice(start, start + itemsPerPage)
  }, [filteredCards, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, typeFilter, colorFilter])

  return (
    <div className="bg-gray-900 relative min-h-full pb-15">
      {paginatedCards.length > 0 ? (
        <ul className="grid grid-cols-2 gap-2 p-2">
          {paginatedCards.map(card => (
            <li key={card.id}>
              <Card card={card} isCardListView={true} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-white text-center pt-10 p-4">
          No cards found
        </div>
      )}

      <Filter
        onSearchChange={setSearchTerm}
        onTypeChange={setTypeFilter}
        onColorChange={setColorFilter}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default CardsList
