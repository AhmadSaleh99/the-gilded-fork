import { Span } from 'next/dist/trace'
import Image from 'next/image'
import React from 'react'

interface CardProps {
    imgUrl:string,
    imgAlt:string,
    title:string,
    paragraph:string,
    price?:string
}

const Card = ({imgUrl, imgAlt, title, paragraph,price}:CardProps) => {
  return (
    <div className='flex flex-col space-y-4 w-3/4 md:w-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rounded-lg'>
        {/* image  */}
        <Image src={imgUrl} alt={imgAlt} width={100} height={100} className='w-full h-auto' />

        {/* card content  */}
        <div className='font-body pl-1'>
            <h3 className='text-secondary font-semibold font-heading'>{title}</h3>
            <p className='mt-2 pb-2  text-dark text-sm md:text-base font-body'>{paragraph}</p>
            {price && (<div className='text-accent font-semibold mb-2'>${price}</div>)}
        </div>
    </div>
  )
}

export default Card