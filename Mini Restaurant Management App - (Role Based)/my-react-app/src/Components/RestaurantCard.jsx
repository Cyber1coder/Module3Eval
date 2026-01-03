import React from 'react'
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({item,deleteItem}) => {
    const navigate = useNavigate();
    
  return (
    <div>
      <div className='card'>
        <img src = {item.image} />
        <h2>{item.address}</h2>
        <h2>{item.type}</h2>
        <h2>{item.parkingLot}</h2>

      </div>
    </div>
  )
}

export default RestaurantCard
