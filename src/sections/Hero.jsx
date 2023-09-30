import React from 'react'
import { Button } from '../components/Button'
import { arrowRight } from '../assets/icons'
import { statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import  {shoes} from '../constants'
import ShoeCard from '../components/ShoeCard'
const Hero = () => {
  return (
   <section
   id="home"
   className="w-full flex
    p-2 xl:flex-row flex-col
    justify-center min-h-screen gap-10
    max-container
    ">
      <div className="relative xl:w-2/5 flex flex-col justify-center
      items-start   w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection </p>
        <h1 className="mt-10 font-palanquin text-8xl
        max-sm:text-[72px] max-sm:leading-1 font-bold">

          <span className="xl:bg-white
          xl:whitespace-nowrap relative z-10 pr-10"> The new arrival</span>
          <br/>
          <span className="text-red-500 inline-block  mt-3">Nike </span>
          Shoes
        </h1>
       <p className="font-montserrat text-gray-600
       leading-8 mt-6 mb-14 sm:max-w-sm
        ">discover stylish Nike arrivals, quality  confort ,
        and innovations for  your active life.
       </p>
       <Button label="Show me" iconUrl={arrowRight}/>
       <div className="
       flex justify-start items-start
       mt-20 w-full
       gap-16 flex-wrap">

        {statistics.map((stat,index) =>(
            <div  key={index} className=" ">
              <p className="text-4xl font -palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-gray-600">{stat.label}</p>

            </div>
        ))}
       </div>
      </div>
      <div  className="relative flex-1 flex
       justify-start items-center  xl:min-h-screen
       max-xl:py-40  bg-blue-100 bg-hero bg-center
       ">
        <img src={bigShoe1}
         alt="shoe collection"
         width={610}
         height={500}
         className="object-contain relative "
        />

       <div >
       {shoes.map((image, index)=>(

            <div key={index}>
              <ShoeCard
              imgUrl={image}

              changeBigShoeImage = {() =>{}}
              bigShoeImg=""

              />

            </div>

       ))}
       </div>




       </div>

   </section>
  )
}

export default Hero