import React from 'react'

const PopularProductCard = ({imgURL, name,price }) => {
  return (
    <div className="flex flex-1 flex-col w-full  max.sm:w-full">
        <img src ={imgURL}  alt={name}/>
    </div>
  )
}

export default PopularProductCard