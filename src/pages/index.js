import React from 'react'
import Squirtle from '../images/squirtle.jpeg'
import {Link} from 'react-router-dom'



const index = () => {

  return (
    <div className="flex flex-col items-center">
        <section className='flex flex-wrap flex-row justify-center items-center mt-32'>
            <h1 className='text-4xl w-64 mr-16 text-blue-900'>Hi! I'm Stephen, an aspiring full-stack developer</h1>
            <img src={Squirtle} className='rounded-full'></img>
        </section>
        <fieldset className="flex flex-wrap items-center mt-16">
            <Link to='/contacts'>
                <button type="button" className="mr-32 bg-blue-500 border-4 border-blue-600 text-white rounded-3xl p-6 w-64 text-3xl">Contact Me</button>
            </Link>
            <Link to='/projects'>
                <button type="button" className="bg-blue-500 border-4 border-blue-600 text-white rounded-3xl p-6 w-64 text-3xl">View Portfolio</button>
            </Link>
        </fieldset>
    </div>
  
  )
}

export default index