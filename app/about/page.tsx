import Card from "@/components/Card";
import Location from "@/components/Location";
import Image from "next/image";
import React from "react";

const teamMembers = [
{
    imgUrl:"/profile-1.svg",
    imgAlt:"Chef",
    title:"Chef Julian Moreau",
    paragraph:"Founder and Executive Chef"
},
{
    imgUrl:"/profile-2.svg",
    imgAlt:"Sous",
    title:"Sous Chef Isabella Rossi",
    paragraph:"Second in Command"
},
{
    imgUrl:"/profile-3.svg",
    imgAlt:"Manager",
    title:"Restaurant Manager David Chen",
    paragraph:"Ensuring a Seamless Experience"
},
]

const About = () => {
  return (
    <main>
      <div className="flex flex-col items-center justify-center mt-6">
        {/* about page image */}
        <Image
          src={"/resturant.jpg"}
          alt="Elegant resturant interior"
          width={600}
          height={400}
          className=" rounded-lg w-full max-w-6xl h-auto md:h-96 shadow-md "
        />

        {/* about page text */}
        <p className="font-body mt-6 text-dark text-base md:text-lg ">
          The Gilded Spoon was founded in 2010 by Chef Julian Moreau, a culinary
          visionary with a passion for creating unforgettable dining
          experiences. Inspired by his travels through Europe and his upbringing
          in a family of food enthusiasts, Julian set out to establish a
          restaurant that celebrates the art of cooking and the joy of sharing a
          meal. <br />
          Our culinary philosophy is rooted in the belief that the best dishes
          are born from the freshest ingredients and a deep respect for
          tradition. We source our produce from local farms, our seafood from
          sustainable fisheries, and our meats from trusted suppliers who share
          our commitment to quality. Each dish is crafted with care, blending
          classic techniques with innovative twists to create a symphony of
          flavors that delights the senses.
        </p>

      </div>
        {/* the team's section  */}
        <h2 className="section-title mt-6">Meet The Team</h2>

        {/* team profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 text-center">
          {teamMembers.map((member, index) => (
            <Card key={index} {...member}/>
          ))}
        </div>
        <p className="font-body my-6 text-dark text-base md:text-lg">At The Gilded Spoon, we are more than just a restaurant; we are a family. Our team of talented chefs, dedicated servers, and passionate staff work together to create a warm and welcoming atmosphere where every guest feels like a cherished friend. We are committed to providing exceptional service, ensuring that your dining experience is nothing short of extraordinary.</p>
         {/* <img
          src={"/map.png"}
          alt="Elegant resturant interior"
          className=" rounded-lg w-full max-w-6xl h-auto shadow-md mb-6"
        /> */}
        <Location />
    </main>
  );
};

export default About;
