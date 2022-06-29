import React from 'react'
import Squirtle from '../images/squirtle.jpeg'

const index = () => {
  return (
    <div className="flex flex-col items-center">
        <section className='flex flex-wrap flex-row justify-center items-center mt-32'>
            <h1 className='text-3xl w-64 mr-16'>Hi! I'm Stephen, an aspiring full-stack developer</h1>
            <img src={Squirtle}></img>
        </section>
        <fieldset className="flex flex-wrap items-center mt-16">
            <button type="button" className="mr-32 bg-blue-500 border-4 border-blue-600 text-white rounded-3xl p-6 w-64 text-3xl">Contact Me</button>
            <button type="button" className="bg-blue-500 border-4 border-blue-600 text-white rounded-3xl p-6 w-64 text-3xl">View Portfolio</button>
        </fieldset>
    </div>
  
  )
}

export default index