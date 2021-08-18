import React from "react";
import image from "../pexels-jan-kopřiva-3280908.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="snake"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-75  px-">
        <h1 className="text-6xl text-white font-bold cursive leading-none  lg:leading-snug home-name ">
          Welcome to my portfolio.
        </h1>
      </section>
    </main>
  );
}
