// src/components/Filter.jsx
import React, { useState, useEffect } from 'react'
import { TextInput, Select, Label, Button, Pagination } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faCircleXmark, faCircleUp, faCircleDown } from '@fortawesome/free-solid-svg-icons'
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
    onPageChange(1)
  }
  return (
    <div className="bg-gray-800 p-2 lg:p-5 px-4 flex flex-col items-center gap-4 fixed w-lvw left-0 bottom-[64px] overflow-x-auto">
      <div className='flex flex-col gap-2 items-center justify-center'>
        {
          totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={page => onPageChange(page)}
              showIcons
              previousLabel=""
              nextLabel=""
            />
          )
        }
        
        <button
          onClick={() => setIsOpen(open => !open)}
          className="text-white focus:outline-none cursor-pointer"
        >
          <span className='text-base text-white mr-3'>Filters</span> 
          <FontAwesomeIcon icon={isOpen ? faCircleXmark : faMagnifyingGlass} size="sm" />
        </button>
      </div>

      {isOpen && (
        <>
          <div className="w-full flex flex-col md:flex-row gap-4">
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
