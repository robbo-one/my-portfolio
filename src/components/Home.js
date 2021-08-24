import React from "react";
import image from "../parrot.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="parrot"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen lg:pt-75">
        <h1 className="text-6xl text-white font-bold cursive leading-none home-name ">
          Welcome to my portfolio.
        </h1>
      </section>
    </main>
  );
}
