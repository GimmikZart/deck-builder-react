import React, { useState, useEffect, useMemo } from 'react';
import Card from '../components/Card';
import Filter from '../components/Filter';
import cardsListFromJson from '../assets/cardsList.json'

function CardsList() {
    const [cardsList, setCardsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [colorFilter, setColorFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');
    
    useEffect(() => {
      setCardsList(cardsListFromJson);
    }, []);
    
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
      <ul className="grid grid-cols-2 gap-2 p-2 ">
        {filteredCards.map(card => (
          <li key={card.id}>
            <Card card={card} isCardListView={true}/>
          </li>
        ))}
      </ul>
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
export default CardsList;