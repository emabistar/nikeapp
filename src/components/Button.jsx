import React from 'react'

export const Button = ({label,iconUrl,backgroundColor,textColor, borderColor,fullWidth}) => {
  return (
    <button className={`flex
     justify-center items-center
     gap-2 px-7 py-4 border
     font-monteserrat  text-lg leading-none
     ${
      backgroundColor
     ? `${backgroundColor}  ${textColor}  ${borderColor}`
     :"bg-red-500   text-white border-red-200 " }
     rounded-full ${fullWidth && "w-full"}
     `}>
      {label}

      {iconUrl && <img  src={iconUrl}
         alt=" Arrow right icon"
         className="w-5 h-5  ml-2  rounded-full"
      />}
    </button>
  )
}
