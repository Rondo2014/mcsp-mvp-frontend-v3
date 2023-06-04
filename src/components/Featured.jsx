import React from 'react'
import Fitpeople2 from '../assets/Fitpeople2.png'


const Featured = () => {
  return (
    <div className='w-full max-w-[1244px] mx-auto bg-secondary border-[1px] border-accent px-4 py-16 rounded-xl'>
        <div className='mx-auto grid md:grid-cols-2'>
            <img src={Fitpeople2} alt='/' className='w-[400px] mx-auto my-4 bg-[#0c0c0c] rounded-xl shadow-lg shadow-accent px-3 pt-3' />
            <div className='flex flex-col justify-center'>
                <p className='text-text font-bold'>TRAINING TO FIT YOUR SPECIFIC GOALS</p>
                <h1 className='text-[#0c0c0c] md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Personal Training</h1>
                <p className='text-white'>At every Globo Gym location, our staff is carefully selected to ensure a proffessional, knowledgeable, and healthy environment. 
                You can be sure that when you sign up for personal fitness training with our staff, you will be recieving the absolute best of the best, tailored to you're fitness needs.</p>
                <button className="bg-accent text-white w-[200px] py-4 my-6 mx-auto rounded-lg  hover:bg-accent-dark hover:text-lg transition-all ease-in">
          Get Started
        </button>
            </div>
        </div>
    </div>
  )
}

export default Featured