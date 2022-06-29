import React from 'react'
import Squirtle from '../images/squirtle.jpeg'

const projectSection = ({
    title,
    subheading,
    description,
    imageSrc,
    reversed,
    bg
}) => {
  return (
    <section
    className={`h-64 pr-16 pl-16 pb-10 pt-5 m-10 gap-12 flex justify-around md:items-center flex-row bg-blue-300 rounded-3xl $(reversed ? "md:flex-row-reverse" : "md:flex-row")`}
    >
         <img className="rounded-full w-40 h-40" src={imageSrc}>
        
        </img>
        <div>
            <h1 className="text-4xl text-blue-900 w-4/5">{title}</h1>
            <h2 className="text-2xl text-blue-900 w-4/5">{subheading}</h2>
            <p className="text-lg text-blue-900 w-3/5">{description}</p>
        </div>
        <div className="bg-blue-900 pl-1 h-48 mt-8">
        </div>
        <div className="flex flex-col mt-10">
            <a href="https://devpost.com/software/close-connect" target="_blank">
           
                <img src={Squirtle} className="h-20"></img>
                <p className="w-40">Visit Website</p>

            </a>
            <a href="https://github.com/stephen-ics/CloseConnect" target="_blank">
                <img src={Squirtle} className="h-20"></img>
                <p>Source Code</p>
            </a>
        </div>
       
    </section>
  )
}

export default projectSection