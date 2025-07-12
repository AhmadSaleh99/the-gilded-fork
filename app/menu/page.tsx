import Card from '@/components/Card'
import React from 'react'

const menuCards = [
   {
    imgUrl:"/featured-1.png",
    imgAlt:"dishes",
    title:"Pan-Seared Scallops",
    paragraph:"Perfectly seared scallops with a lemon-butter sauce.",
    price:"10"
},
   {
    imgUrl:"/featured-2.png",
    imgAlt:"dishes",
    title:"Pan-Seared Scallops",
    paragraph:"Perfectly seared scallops with a lemon-butter sauce.",
    price:"10"
},
   {
    imgUrl:"/featured-3.png",
    imgAlt:"dishes",
    title:"Pan-Seared Scallops",
    paragraph:"Perfectly seared scallops with a lemon-butter sauce.",
    price:"10"
},
   {
    imgUrl:"/special.png",
    imgAlt:"dishes",
    title:"Pan-Seared Scallops",
    paragraph:"Perfectly seared scallops with a lemon-butter sauce.",
    price:"10"
},
   {
    imgUrl:"/menu-1.jpg",
    imgAlt:"dishes",
    title:"Pan-Seared Scallops",
    paragraph:"Perfectly seared scallops with a lemon-butter sauce.",
    price:"10"
},
   {
    imgUrl:"/menu-3.jpg",
    imgAlt:"dishes",
    title:"Pan-Seared Scallops",
    paragraph:"Perfectly seared scallops with a lemon-butter sauce.",
    price:"10"
},
   {
    imgUrl:"/menu-3.jpg",
    imgAlt:"dishes",
    title:"Pan-Seared Scallops",
    paragraph:"Perfectly seared scallops with a lemon-butter sauce.",
    price:"10"
},
]

const Menu = () => {
  return (
    <main>
      {/* title  */}
      <h2 className="section-title mt-6">Our Menu</h2>

      {/* paragraph  */}
      <p>Explore our diverse menu, featuring dishes crafted with the freshest ingredients and culinary expertise.</p>

      {/* filter buttons */}
      {/* <div className='flex gap-3 flex-wrap my-3'>
        <button className='btn-primary'>All</button>
        <button className='btn-primary'>Appetizers</button>
        <button className='btn-primary'>Mains</button>
        <button className='btn-primary'>Deserts</button>
        <button className='btn-primary'>Drinks</button>
        <button className='btn-primary'>Vegetarian</button>
      </div> */}

      {/* menu cards  */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 my-4 justify-items-center'>
      {menuCards.map((menuCard,index)=>(
        <Card key={index} {...menuCard} />
      ))}
      </div>

    </main>
  )
}

export default Menu