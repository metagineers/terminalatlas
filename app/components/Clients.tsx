import React from 'react'
import { InfiniteMovingCards } from './ui/InifiniteMovingCards'
import { testimonials,companies } from '@/data'

const Clients = () => {
  return (
    <div id="testimonials" className='py-20'>
        <h1 className='heading'>Hear from {' '}<span className='text-purple'>satisfied clients</span></h1>
        <div className='flex flex-col items-center max-lg:mt-10 mb-20'>
                       <InfiniteMovingCards 
                items = {testimonials}
                direction = 'right'
                speed = 'slow'
            />
        </div>
        <h1 className='heading'>Our proud {' '}<span className='text-purple'>partners</span></h1>
        
        <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
            {companies.map(({id, img, name, nameImg}) => (
                <div key={id} className='max-w-32 gap-2'>
                    <img src={img} alt={name} className='md:w-24 w-20' />
                    { nameImg && <img src={nameImg} alt={name} className='md:w-10 w-5' /> }
                </div>
            ))}
        </div>
    </div>
  )
}

export default Clients