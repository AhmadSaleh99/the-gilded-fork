import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SpecialOffers = () => {
  return (
    <section>
        {/* section title  */}
        <h2 className='section-title mt-6'>Special Offers & Events</h2>

        {/* section contect */}
        <div className='flex flex-col md:flex-row gap-4 '>
            {/* section image  */}
            <Image src="/special.png" alt="Special Offer" width={600} height={600} className='transform w-auto h-auto transition-transform duration-500 ease-in-out hover:scale-105' />

            {/* section text  */}
            <div className='flex gap-4 md:gap-6 justify-between sm:items-center flex-col sm:flex-row md:flex-col md:justify-start md:items-end'>

            <div>
                <h3 className='text-secondary font-semibold mt-2 font-heading'>Wine Tasting Night</h3>
                <p className='mt-2 pb-2  text-dark text-sm md:text-base font-body'>Join us for an evening of fine wines and gourmet pairings.</p>
            </div>
            <div>
                <Link href="/menu" className='btn-primary'>Learn More</Link>
            </div>
            </div>
        </div>
    </section>
  )
}

export default SpecialOffers