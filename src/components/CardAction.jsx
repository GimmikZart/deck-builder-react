import React, { useContext } from 'react'
import { Button } from 'flowbite-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faCircleCheck, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addCard, removeCard, selectIsInCollection } from '../store/collectionSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CollectionContext } from '../contexts/CardViewContext'

export default function CardAction({card}) {
    const dispatch = useDispatch()
    const inCollection = useSelector(state =>
        selectIsInCollection(state, card.id)
    )
    const isCollectionView = useContext(CollectionContext)
    const handleAddCard = e => {
        e.stopPropagation()
        if (!inCollection) {
        dispatch(addCard(card))
        } 
    }

    const handleRemoveCard = e => {
        e.stopPropagation()
        if (inCollection) {
            dispatch(removeCard(card.id))
        }
    }
  return (
    <div className="bg-gray-100 rounded-lg absolute right-0 bottom-0 p-1">
      {inCollection ? (
        !isCollectionView ? (
        <FontAwesomeIcon icon={faCircleCheck} color="green" size="xl" />
        ) : (
        <Button pill size="xs" color="red" className="p-2 h-auto cursor-pointer" onClick={handleRemoveCard}>
          <FontAwesomeIcon icon={faTrash} />
        </Button>
        )
      ) : (
        <Button pill size="xs" color="blue" className="p-2 h-auto cursor-pointer" onClick={handleAddCard}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      )}
    </div>
  )
}
