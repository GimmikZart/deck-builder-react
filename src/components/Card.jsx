import { useState } from 'react';
import CardAction from './CardAction';

export default function Card({ card, isCardListView = false }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="shadow-md w-full h-full rounded-lg overflow-hidden relative">
        <img 
          src={card.images.small} 
          alt={card.name} 
          className="w-full object-cover" 
          onClick={() => setIsOpen(true)}
        />
        <CardAction card={card} isCardListView={isCardListView}/>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-10" onClick={() => setIsOpen(false)}>
          <img 
            src={card.images.large} 
            alt={card.name} 
            className="w-full h-auto object-cover" 
            onClick={() => setIsOpen(true)}
          />
        </div>
        
      )}
    </>
  );
}
