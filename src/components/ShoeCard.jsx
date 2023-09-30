import React from 'react'

const ShoeCard = ({imgUrl,changeBigShoeImage, bigShoeImage}) => {
    const handleClick= ()=>{
        if(bigShoeImage !==imgUrl.bigShoe){
            changeBigShoeImage(imgUrl.bigShoe)
        }
    }
  return (
    <div className={`
     border-2 rounded-xl
     ${
bigShoeImage ===imgUrl
    ? 'border-red-300'
    : 'border-transparent'
     } cursor-pointer max-sm:flex-1
   `}
    onClick={handleClick}
   >
    <div>
        <img src={imgUrl.thumbnail }
         alt="Shoe collection"
         width={127}
         height={103}
        />
    </div>
    </div>
    )}

export default ShoeCard