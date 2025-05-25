import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux'
import Card from '../components/Card';
import Filter from '../components/Filter';

const selectCollection = state => state.collection
function Collection() {

    const cardsList = useSelector(selectCollection)
  
    const [searchTerm, setSearchTerm] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    
    const filteredCards = useMemo(() => {
      return cardsList.filter(card => {
        const matchesSearch = card.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        const matchesType = typeFilter
          ? card.type === typeFilter
          : true;
        const matchesColor = colorFilter
          ? card.color === colorFilter
          : true;
  
        return matchesSearch && matchesType && matchesColor;
      });
    }, [cardsList, searchTerm, typeFilter, colorFilter]);
    
  return (
    <div className=" bg-gray-900 relative min-h-full pb-15">
      {
        filteredCards.length > 0 ?
          <ul className="grid grid-cols-2 gap-2 p-2 ">
            {filteredCards.map(card => (
              <li key={card.id}>
                <Card card={card}/>
              </li>
            ))}
          </ul>
        : <div className="text-white text-center pt-10 p-4">No cards found</div>
      }
      <Filter 
        onSearchChange={(value) => {
          setSearchTerm(value);
        }}
        onTypeChange={(value) => {
          setTypeFilter(value);
        }}
        onColorChange={(value) => {
          setColorFilter(value);
        }}
      />
    </div>
  );
}
export default Collection;