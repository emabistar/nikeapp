import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className="flex-1 sm:w-[350px]sm:min-w-[350px]
    w-full rounded-[20px]  shadow-2xl px-10 py-16" >
        <img src={imgURL} className="w-11 h-11 bg-red-400 rounded-full"
           alt={label}
           width={24}
           height={24}

        />
       <h3 className="mt-5 text-3xl font-palanquin leading-normal font-bold ">{label} </h3>
       <p className="mt-3 text-lg  leading-normal text-gray-600">{subtext}</p>

        </div>
  )
}

export default ServiceCard