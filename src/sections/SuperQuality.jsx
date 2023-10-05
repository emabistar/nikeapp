import React from 'react'
import { Button } from '../components/Button'

const SuperQuality = () => {
  return (
    <section id ="about-us" className="flex
    justify-between  items-center max-lg:flex-col gap-10 w-full max-container">

    <div className="felx flex-1 flex-col">
        <p>Our Super Quality</p>
        <h1 className="mt-10 font-palanquin text-4xl
       capitalize font-bold lg:max-w-lg">
           We provide you with
         <span className="text-red-400">Super</span>

         <span className="text-red-400">
          Quality
         </span> Shoes
        </h1>
       <p className="mt-4 lg:mx-w-lg info-text"
        > Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Illum animi, iusto magni veniam minima unde earum numquam autem vel eaque reprehenderit, perferendis ad omnis eum
        necessitatibus accusantium sunt quo ratione?
       </p>
       <Button label="View details" />

    </div>

  </section>
  )
}

export default SuperQuality