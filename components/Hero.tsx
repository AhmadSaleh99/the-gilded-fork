import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center mt-6 2xl:flex-row 2xl:justify-between 2xl:gap-4'>
        {/* hero section image */}
        <Image src={"/hero.svg"} 
        alt='Elegant resturant interior'
        height={100}
        width={100}
        className=' rounded-lg w-full max-w-6xl h-auto shadow-md 2xl:w-2/3'
        />
{/* <div className="relative w-full max-w-6xl mx-auto h-3/4 rounded-lg shadow-md">
      <Image
        src="/hero.svg"
        alt="Elegant restaurant interior"
        fill 
        style={{ objectFit: 'cover' }}
      />
    </div> */}
        {/* hero section text */}

        <p className='font-body mt-6 text-dark text-base md:text-lg md:text-center'>Experience culinary excellence in an elegant setting. Our menu features innovative dishes crafted with the finest ingredients, complemented by an extensive wine list. Join us for an unforgettable dining experience.</p>
    </section>
  )
}

export default Hero