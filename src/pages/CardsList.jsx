import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Filter from '../components/Filter';
function CardsList() {
    const [cardsList, setCardsList] = useState([]);
    useEffect(() => {
        fetch('/src/assets/cardsList.json')
        .then(res => res.json())
        .then(setCardsList);
    }, []);
    console.log('Rendering CardsList', cardsList.length, 'cards');
    
  return (
    <div className=" bg-black relative">
      <ul className="grid grid-cols-2 gap-2 p-2 ">
        {cardsList.map(card => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
      <Filter 
        onSearchChange={(value) => {
          console.log('Search changed:', value);
          // Implement search logic here
        }}
        onTypeChange={(value) => {
          console.log('Type changed:', value);
          // Implement type filter logic here
        }}
        onRarityChange={(value) => {
          console.log('Rarity changed:', value);
          // Implement rarity filter logic here
        }}
        typeOptions={['Fire', 'Water', 'Grass']} // Example options
        rarityOptions={['Common', 'Uncommon', 'Rare']} // Example options
      />
    </div>
  );
}
export default CardsList;