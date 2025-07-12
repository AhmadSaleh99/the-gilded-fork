import React from 'react'

const customers =[
    {
        prfileImg:"/profile-1.svg",
        name:"Sophia Bennett",
        date:"2023-08-15",
        stars:"",
        ratings:"The Gilded Spoon exceeded all expectations. The food was exquisite, and the service was impeccable. A truly memorable dining experience!",

    },
    {
        prfileImg:"/profile-2.svg",
        name:"Ethan Carter",
        date:"2023-09-22",
        stars:"",
        ratings:"A great place for a special occasion. The ambiance is lovely, and the staff is very attentive. The food was good, but not exceptional."
    },
    {
        prfileImg:"/profile-3.svg",
        name:"Olivia Davis",
        date:"2023-10-10",
        stars:"",
        ratings:"Absolutely fantastic! From the moment we walked in, we felt welcomed. The food was divine, and the wine selection was impressive. Highly recommend!"
    },
 
]

const CustomerTestimonials = () => {
  return (
    <section>
        {/* customer Testimonials title  */}
        <h2 className='section-title mt-6'>Customer Testimonials</h2>

        {/* testimonials content  */}

        {
            customers.map((customer,index)=>(

        <div key={index} >
            <div className="customerProfile flex space-x-3 items-center mb-2">
                <img src={customer.prfileImg} alt="Profile image" />
                <div className='text-secondary font-heading'>
                    <h4>{customer.name}</h4>
                    <span className="date">{customer.date}</span>
                </div>
            </div>
            <div className="stars"></div>
            <p className='mb-4 font-body text-sm text-accent'>{customer.ratings}</p>
        </div>
            ))
        }


    </section>
  )
}

export default CustomerTestimonials