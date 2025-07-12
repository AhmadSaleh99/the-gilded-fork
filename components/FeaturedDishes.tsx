import React from 'react'
import Card from './Card'


const featuredCard=[
    {
    imgUrl:"/featured-1.png",
    imgAlt:"dishes",
    title:"Pan-Seared Scallops",
    paragraph:"Perfectly seared scallops with a lemon-butter sauce."
},
    {
    imgUrl:"/featured-2.png",
    imgAlt:"dishes",
    title:"Fresh Seafood Platte",
    paragraph:"A selection of the freshest catches of the day."
},
    {
    imgUrl:"/featured-3.png",
    imgAlt:"dishes",
    title:"Decadent Chocolate Cake",
    paragraph:"Rich chocolate cake with a raspberry coulis."
},

]
const FeaturedDishes = () => {
  return (
    <section className='mt-6'>
        {/* title  */}
        <h2 className='section-title'>Featured Dishes</h2>

        {/* cards  */}
        <div className='grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
        {featuredCard.map((card,index)=><Card key={index} {...card}/>)
        }
        </div>
    </section>
  )
}

export default FeaturedDishes