// src/components/DataListPage.jsx
import React, { useState, useEffect, useMemo } from 'react'
import Filter from './Filter'

export default function DataListPage({
  data = [],
  renderItem,
  itemsPerPage = 20,
}) {
  const [searchTerm,  setSearchTerm]  = useState('')
  const [typeFilter,  setTypeFilter]  = useState('')
  const [colorFilter, setColorFilter] = useState('')

  const [currentPage, setCurrentPage] = useState(1)

  const filtered = useMemo(() => {
    return data.filter(item => {
      const nameMatch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
      const typeMatch = typeFilter ? item.type === typeFilter : true
      const colorMatch = colorFilter ? item.color === colorFilter : true
      return nameMatch && typeMatch && colorMatch
    })
  }, [data, searchTerm, typeFilter, colorFilter])

  const totalPages = Math.max(
    1,
    Math.ceil(filtered.length / itemsPerPage)
  )

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage
    return filtered.slice(start, start + itemsPerPage)
  }, [filtered, currentPage, itemsPerPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, typeFilter, colorFilter])

  return (
    <div className="bg-gray-900 relative min-h-full pb-30">
      {paginated.length > 0 ? (
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2 sm:p-4 sm:gap-4 md:grid-cols-4 md:p-5 md:gap-5 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {paginated.map(item => (
            <li key={item.id}>{renderItem(item)}</li>
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
