import React from "react";
import image from "../parrotedt crop.jpg";





export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt='parrot'
        className='absolute object-cover w-full h-full'
      />
      <section className='relative flex justify-center min-h-screen lg:pt-75'>
        <h1  className='text-8xl  text-white font-bold cursive pt-1 ml-80 absolute'>
        
          </h1>
      </section>
    </main>
  )
}
