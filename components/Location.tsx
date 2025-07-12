import React from 'react'

const Location = () => {
  return (
    <section>
        {/* section title  */}
        <h2 className="section-title mt-6">Location</h2>

        {/* location details  */}
        <div>
            <img src="/map.png" alt="Map" className='w-full'/>

            <div className='flex flex-col md:flex-row font-body gap-4 my-4 md:justify-between text-secondary font-semibold'>
                <div className='flex flex-col '>
                    <span>123 Main street, Anytown</span>
                    <span> phone: (123) 456-7890</span>
                    <span>Email: info@gildedfork.com</span>
                </div>

                <div>

                    Operating Hours:<br/>
                    Mondy-Saturday: 6pm-11pm<br/>
                    Sunday: Closed
                </div>
            </div>
        </div>
    </section>
  )
}

export default Location