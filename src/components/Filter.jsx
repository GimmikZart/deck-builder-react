// src/components/Filter.jsx
import React, { useState, useEffect } from 'react'
import { TextInput, Select, Label, Button, Pagination } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import colorsListFromJson from '../assets/colorList.json'
import typeListFromJson   from '../assets/typeList.json'

export default function Filter({
  onSearchChange,
  onTypeChange,
  onColorChange,
  currentPage,
  totalPages,
  onPageChange
}) {
  const [isOpen, setIsOpen] = useState(false)

  const [searchValue, setSearchValue] = useState('')
  const [typeValue,   setTypeValue]   = useState('')
  const [colorValue,  setColorValue]  = useState('')

  const [typeList,  setTypeList]  = useState([])
  const [colorList, setColorList] = useState([])

  useEffect(() => {
    setTypeList(typeListFromJson)
    setColorList(colorsListFromJson)
  }, [])

  const handleReset = () => {
    setSearchValue('')
    setTypeValue('')
    setColorValue('')
    onSearchChange('')
    onTypeChange('')
    onColorChange('')
    // Riportiamo anche la pagina a 1
    onPageChange(1)
  }

  return (
    <div className="bg-gray-800 min-h-15 p-2 px-4 flex flex-col gap-4 fixed w-full left-0 bottom-[64px]">
      <div className="flex h-full items-center justify-between">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={page => onPageChange(page)}
          showIcons
          previousLabel=""
          nextLabel=""
        />
        <button
          onClick={() => setIsOpen(open => !open)}
          className="text-white focus:outline-none ml-auto"
        >
          <FontAwesomeIcon icon={isOpen ? faFilterCircleXmark : faFilter} size="lg" />
        </button>
      </div>

      {isOpen && (
        <>
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex flex-col">
              <Label htmlFor="search" className="mb-2 text-white">Name</Label>
              <TextInput
                id="search"
                value={searchValue}
                placeholder="Es. Luffy"
                onChange={e => {
                  setSearchValue(e.target.value)
                  onSearchChange(e.target.value)
                }}
              />
            </div>

            {/* Type */}
            <div className="flex flex-col">
              <Label htmlFor="type" className="mb-2 text-white">Type</Label>
              <Select
                id="type"
                value={typeValue}
                onChange={e => {
                  setTypeValue(e.target.value)
                  onTypeChange(e.target.value)
                }}
              >
                <option value="">All</option>
                {typeList.map(t => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </Select>
            </div>

            {/* Color */}
            <div className="flex flex-col">
              <Label htmlFor="color" className="mb-2 text-white">Color</Label>
              <Select
                id="color"
                value={colorValue}
                onChange={e => {
                  setColorValue(e.target.value)
                  onColorChange(e.target.value)
                }}
              >
                <option value="">All</option>
                {colorList.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
            </div>

            {/* Reset */}
            <div className="flex items-end">
              <Button color="light" onClick={handleReset} className="w-full">
                Reset
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
