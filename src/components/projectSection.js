import React from 'react'
import Squirtle from '../images/squirtle.jpeg'
import Bar from './bar'

const projectSection = ({
    title,
    subheading,
    description,
    completedDate,
    imageSrc,
    reversed,
    bg
}) => {
  return (
    <section
    className="h-64 pr-16 pl-16 pb-10 pt-5 m-10 gap-12 bg-blue-300 rounded-3xl
    flex items-center flex-row border-blue-400 border-4
    hover:bg-blue-400 duration-200 delay-100 transition-all hover:shadow-inner hover:border-blue-700"

    >
         <img className="rounded-full w-40 h-40" src={imageSrc}>
        
        </img>
        <div>
            <div className="flex flex-row justify-start">
                <h1 className="text-4xl text-blue-900 w-4/5">{title}</h1>
                <h1>{completedDate}</h1>
            </div>
            <h2 className="text-2xl text-blue-900 w-4/5">{subheading}</h2>
            <p className="text-lg text-blue-900 w-3/5">{description}</p>
        </div>
   
        <div className="flex flex-col mt-10">
            <a href="https://devpost.com/software/close-connect" target="_blank">
           
                <img src={Squirtle} className="h-20 rounded-full"></img>
                <p className="w-40">Visit Website</p>

            </a>
            <a href="https://github.com/stephen-ics/CloseConnect" target="_blank">
                <img src={Squirtle} className="h-20 rounded-full"></img>
                <p>Source Code</p>
            </a>
        </div>
       
    </section>
  )
}

export default projectSection