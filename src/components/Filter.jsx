import { TextInput, Select, Label } from 'flowbite-react'
import React from 'react'

export default function Filter({ 
  onSearchChange, 
  onTypeChange, 
  onRarityChange,
  typeOptions = [], 
  rarityOptions = [] 
}) {
  return (
    <div className="bg-gray-800 p-5 flex flex-col md:flex-row gap-4 sticky left-0 bottom-0">
      <h3 class="text-white font-bold text-lg">Filters</h3>
      <div className="flex flex-col">
        <Label htmlFor="search" value="Cerca nome" />
        <TextInput
          id="search"
          placeholder="Es. Luffy"
          onChange={e => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="type" value="Tipo" />
        <Select
          id="type"
          onChange={e => onTypeChange(e.target.value)}
        >
          <option value="">Tutti</option>
          {typeOptions.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </Select>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="rarity" value="Rarità" />
        <Select
          id="rarity"
          onChange={e => onRarityChange(e.target.value)}
        >
          <option value="">Tutte</option>
          {rarityOptions.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </Select>
      </div>
    </div>
  )
}
