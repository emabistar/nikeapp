import React from 'react'
import { offer } from '../assets/images'
import { Button } from '../components/Button'

const SpecialOffers = () => {
  return (
    <section className="flex justify-wrap  items-center gap-10
    max-xl:flex-col-reverse
      max-container">

     <div className="flex-1">
      <img src={offer}
       width={773}
      height={687}
       className="object-contain w-full"
     />
     </div>
     <div className="flex flex-1 flex-col">
        <h1 className="mt-10 font-palanquin text-4xl
       capitalize font-bold lg:max-w-lg ">
         <span className="text-red-400">Specials  </span>
           Offers
        </h1>
       <p className="mt-4 lg:mx-w-lg info-text"
        > Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Illum animi, iusto magni veniam minima unde earum numquam autem vel eaque reprehenderit, perferendis ad omnis eum
        necessitatibus accusantium sunt quo ratione?
       </p>
       <p className="mt-4 lg:mx-w-lg info-text"
        > Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Illum animi, iusto magni veniam minima unde earum numquam autem vel eaque reprehenderit, perferendis ad omnis eum
        necessitatibus accusantium sunt quo ratione?
       </p>
        <div className ="mt-11 flex flex-wrap gap-4">
        <Button label="View details" />
        <Button label="Learn more"
         backgroundColor='bg-white-300'
         borderColor='border-gray-400'
          textColor='text-gray-600'
        />
        </div>
       </div>

    </section>
  )
}

export default SpecialOffers