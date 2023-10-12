import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard'

const Services = () => {
  return (
    <section id="services" className="max-container  flex flex-wrap justify-center gap-9 ">
         {services.map((service,index)=>(
              <ServiceCard  key={index} {...service} />
         ))}
      </section>
  )
}

export default Services