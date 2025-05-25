import React, { useState, useMemo, useEffect } from 'react';
import Card from '../components/Card';

function CardsList() {
    const [cardsList, setCardsList] = useState([]);
    useEffect(() => {
        fetch('/src/assets/cardsList.json')
        .then(res => res.json())
        .then(setCardsList);
    }, []);
    console.log('Rendering CardsList', cardsList.length, 'cards');
    
  return (
    <div className="min-h-screen h-full w-full bg-black p-2 pb-20 relative">
      <ul className="grid grid-cols-2 gap-2">
        {cardsList.map(card => (
          <li key={card.id}>
            <Card card={card} />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CardsList;