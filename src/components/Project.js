import React, {  useState, useEffect } from  "react"
import  sanityClient from  "../client.js"

export default function Project() {
    const [projectData, setProjectData] = useState(null)

    

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == 'project']{
          title,
          date,
          location,
          description,
          project,
          link,
          projectType,
          tags,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`
          )
          .then((data) => setProjectData(data)) 
          .catch(console.error);
      }, []);

    return (
      <main className='bg-black min-h-screen p-12'>
        <section className='container mx-auto'>
          <h1 className='text-8xl text-gray-300 flex justify-center cursive'>Projects</h1>
          <h2 className='text-lg text-gray-300  flex justify-center mb-12'>
            Welcome to my projects page!
          </h2>
          <section className='grid  grid-cols-3 gap-8'>
            {projectData &&
              projectData.map((project, index) => (
                <article
                  key={project.title}
                  className=" border-solid border-4 border-yellow-400 bg-blue-50 relative rounded-lg shadow-xl bg-white p-16"
                >
                  <h3 className='text-gray-800 text-3xl font-bold mb-2 hover:text-green-500'>
                    <a
                      href={project.link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.title}
                    </a>
                  </h3>
                  <div className='text-gray-500 text-xs space-x-4'>
                    <span>
                      <strong className='font-bold'>Finished on</strong>:{' '}
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span>
                      <strong className='font-bold'>Location</strong>:{' '}
                      {project.location}
                    </span>
                    <span>
                      <strong className='font-bold'>Type</strong>{' '}
                      {project.projectType}
                    </span>

                    <p className='my-6 text-lg text-black leading-relaxed'>
                      {project.description}
                    </p>
                    <img
                      src={project?.mainImage?.asset?.url}
                      alt={project.title}
                    />
                    <a
                      href={project.link}
                      rel='noopener noreferrer'
                      target='_blank'
                      className='text-red-500 font-bold hover:underline hover:text-green-500 text-3xl'
                    >
                      <div></div>
                      View the Project{' '}
                      <span role='img' aria-label='right pointer'>
                        👉
                      </span>
                    </a>

                    {/* <p>{project.tags}</p> */}
                  </div>
                </article>
              ))}
          </section>
        </section>
      </main>
    )
}