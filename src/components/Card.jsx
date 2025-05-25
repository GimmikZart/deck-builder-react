import { useState } from 'react';

export default function Card({ card }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <div className="shadow-md w-full h-full">
          <img 
            src={card.images.small} 
            alt={card.name} 
            className="w-full object-cover" 
            onClick={() => setIsOpen(true)}
          />
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
