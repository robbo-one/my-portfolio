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
      <section className="relative flex justify-center min-h-screen lg:pt-75">
        <h1 className="text-6xl text-white font-bold cursive leading-none lg:leading-snug home-name ">
          Welcome to my portfolio.
        </h1>
      </section>
    </main>
  );
}
