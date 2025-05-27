import { useState } from 'react';
import CardAction from './CardAction';
import { Spinner } from 'flowbite-react'

export default function Card({ card}) {
  const [isOpen, setIsOpen] = useState(false);
  const [thumbLoaded, setThumbLoaded]     = useState(false)
  const [largeLoaded, setLargeLoaded]     = useState(false)

  return (
    <>
      <div className="shadow-md w-full h-full rounded-lg overflow-hidden relative">
        {!thumbLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-700">
            <Spinner size="lg" />
          </div>
        )}
        <img 
          src={card.images.small} 
          alt={card.name} 
          className="w-full object-cover" 
          onLoad={() => setThumbLoaded(true)}
          onClick={() => setIsOpen(true)}
        />
        <CardAction card={card}/>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-10" onClick={() => setIsOpen(false)}>
          {!largeLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Spinner size="xl" color="light" />
              </div>
            )}
          <img 
            src={card.images.large} 
            alt={card.name} 
            className="w-full h-auto lg:w-auto lg:h-3/4 object-cover" 
            onLoad={() => setLargeLoaded(true)}
            onClick={() => setIsOpen(true)}
          />
        </div>
        
      )}
    </>
  );
}
