import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const Reviews = () => {
  return (
   <section className="max-container">

        <h3 className="text-3xl font-bold text-center ">
          What our <span className="text-red-600">customers</span> Say ?
        </h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis doloribus cupiditate nulla obcaecati quam rem error repellendus aperiam, in beatae dolores consequuntur reiciendis illum.</p>

        <div className="mt-24  flex flex-1  justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review,index)=>(

            <ReviewCard key={index} {...review} />

            ))}
        </div>

   </section>
  )
}

export default Reviews