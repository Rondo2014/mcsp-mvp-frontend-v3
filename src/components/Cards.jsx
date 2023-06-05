import React from 'react'
import { Reveal } from './utils/Reveal'
import { AttachMoneyOutlined, FitnessCenter, MoneyOff } from '@mui/icons-material'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4'>
        <div className='max-w-[1244px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl shadow-secondary hover:shadow-accent hover:shadow-2xl hover:scale-105 flex flex-col p-4 my-4 rounded-lg transition-all duration-500 ease-in-out'>
 
                <MoneyOff style={{ fontSize: '48px', display: 'block' }} className='text-accent mx-auto mt-[-1.5rem]' />
                <Reveal>
                <h2 className='text-white text-2xl font-bold text-center py-8'>30 Day Free Trial</h2>
                </Reveal>
                <Reveal>
                <p className='text-text text-center text-4xl font-bold'>$0</p> 
                </Reveal>
                <div className='text-center font-medium'>   
                   <Reveal>
                    <p className='text-white py-2 border-b mx-8 mt-8 border-accent-dark'>Access to registered Globo Gym location</p>
                  </Reveal> 
                   <Reveal>
                    <p className='text-white py-2 border-b mx-8 border-accent-dark'>1 free sessions with our training experts</p>
                  </Reveal> 
                   <Reveal>
                    <p className='text-white py-2 border-b mx-8 border-accent-dark'>Full access to Globo Power fitness tracker</p>
                  </Reveal> 
                    </div>
                    <button className="bg-accent text-white w-[200px] py-4 my-6 mx-auto rounded-lg  hover:bg-accent-dark hover:text-lg transition-all ease-in"> Start Free Trial</button>
            </div>
            <div className='w-full shadow-xl shadow-secondary hover:shadow-accent hover:shadow-2xl hover:scale-105 flex flex-col p-4 my-4 rounded-lg transition-all duration-500 ease-in-out'>
                <AttachMoneyOutlined style={{ fontSize: '48px', display: 'block' }} className='text-accent mx-auto mt-[-1.5rem]' />
                <Reveal>
                <h2 className='text-white text-2xl font-bold text-center py-8'>Monthly</h2>
                </Reveal>
                <Reveal>
                <p className='text-text text-center text-4xl font-bold'>$40<span className=' text-base text-secondary'>/month </span> </p>
               </Reveal>
                <div className='text-center font-medium'>   
                  <Reveal>
                    <p className='text-white py-2 border-b mx-8 mt-8 border-accent-dark'>Unlimited access to Globo Gym locations</p>
                 </Reveal> 
                  <Reveal>
                    <p className='text-white py-2 border-b mx-8 border-accent-dark'>1 free training sessions and fitness tracker access</p>
                   </Reveal>
                   <Reveal>
                    <p className='text-white py-2 border-b mx-8 border-accent-dark'>Cancel any time</p>
                   </Reveal>
                    </div>
                    <button className="bg-accent text-white w-[200px] py-4 my-6 mx-auto rounded-lg  hover:bg-accent-dark hover:text-lg transition-all ease-in"> Start Free Trial</button>
            </div>
            <div className='w-full shadow-xl shadow-secondary hover:shadow-accent hover:shadow-2xl hover:scale-105 flex flex-col p-4 my-4 rounded-lg transition-all duration-500 ease-in-out'>
                <FitnessCenter style={{ fontSize: '48px', display: 'block' }} className='text-accent mx-auto mt-[-1.5rem]' />
                <Reveal>
                <h2 className='text-white text-2xl font-bold text-center py-8'>Annual</h2>
                </Reveal>
                <Reveal>
                <p className='text-text text-center text-4xl font-bold'>$432<span className=' text-base text-secondary'>/year </span></p>
                </Reveal>
                <div className='text-center font-medium'>         
                   <Reveal>
                    <p className='text-text py-2 border-b mx-8 mt-8 border-accent-dark'>Save $72/year</p>
                   </Reveal>
                   <Reveal>
                    <p className='text-text py-2 border-b mx-8 border-accent-dark'>All locations and fitness tracker access</p>
                   </Reveal>
                   <Reveal>
                    <p className='text-text py-2 border-b mx-8 border-accent-dark'>Free weekly training session with our expert trainers</p>
                   </Reveal>
                    </div>
                    <button className="bg-accent text-white w-[200px] py-4 my-6 mx-auto rounded-lg  hover:bg-accent-dark hover:text-lg transition-all ease-in"> Start Free Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards