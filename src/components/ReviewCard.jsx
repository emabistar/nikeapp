import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({imgURL,customerName,rating, feedback}) => {
  return (
    <div className="flex justify-center items-center flex-col">

    <img  src={imgURL}
      alt="customer"
      width={120}
      className="rounded-full object-cover w-[120px] h-[120px]"
      height={120}/>
       <p className="mt-6 max-w-lg text-center  info-text">{feedback}</p>

     <div className="flex  max-lg:flex-col justify-center items-center">
     <p className="p-4 text-xl font-montserrat text-gray-500">({rating})</p>

    <img src={star} width={24} height={24} className="object-contain m-0"/>
     </div>
     <h3 className="mt-2 font-palanquin text-3xl text-center font-bold">{customerName}</h3>

    </div>

  )
}

export default ReviewCard