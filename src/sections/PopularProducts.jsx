import React from 'react'
import PopularProductCard from '../components/PopularProductCard'
import {products}  from '../constants'
const PopularProducts = () => {
  return (
    <section id="products"
      className="max-container
      max-sm:mt-12">
        <div className="">
        <h2 className="text-4xl font-palanquin font-bold"><span className="text-red-300">Our</span> Pupular Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-gray-300">  Experience top-notch quality and style with  our sought-after selections
            . Discover  a world of confort , and value.
        </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {products.map((product)=>(
            <PopularProductCard key={product.name} {...product} />
          ))}
        </div>




    </section>
  )
}

export default PopularProducts