import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import turtle from "../turtle.jpg";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return <div>Loading...</div>;

  return (
    <main className='relative'>
      <img src={turtle} alt='turtle' className='absolute w-full' />
      <div className='p-30  lg:pt-1 container mx-auto relative'>
        <section className='mt-10 bg-white bg-opacity-70 rounded-lg shadow-2xl lg:flex p-10'>
          <img
            src={urlFor(author.authorImage).url()}
            className='rounded w-32 h-32 lg:w-64 lg:h-64 mr-8'
            alt='Rob'
          />
          <div className='text-lg flex flex-col justify-center'>
            <h1 className='cursive text-8xl text-black-300 mb-4'>
              Hey there. I'm{' '}
              <span className='text-green-400'>{author.name}</span>
            </h1>
            <p className='text-black-200 text-2xl text-lg'>{author.bio}</p>
            <span className="mt-5">
              <a
                className='text-white rounded text-3xl bg-blue-800 focus:ring-2 hover:text-green-500 text-lg'
                href='https://www.linkedin.com/in/robbo123/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Click me!
              </a>
            </span>
          </div>
        </section>
      </div>
    </main>
  )
}