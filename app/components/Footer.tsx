import React from 'react'
import { ShimmerButton } from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10' id="contact">

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>Ready to <span className='text-purple'>Experience</span> the Latest in Home and Leisure Innovation?</h1>
            <p className='text-white-500 md:mt-10 my-5'>Reach out to us today and let&apos;s discuss how we can help bring in the next innovative product for you.</p>
            <a href="mailto:dzulkiflee@me.com">
                <ShimmerButton title="Lets get in touch" icon={<FaLocationArrow />} position="right" />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className="text-sm md:text-base md:font-normal font-light">Copyright ©️ 2024 Highlife Leisure Ltd, The Gospel Hall, 3 Churchill Road, Parkstone, Poole, Dorset BH12 2LW, United Kingdom</p>
            <div className='flex items-center md:gap-3 gap-6 '>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                        <img src={profile.img} alt={`${profile.id}`}  width={20} height={20} />
                    </div>
                ))}

            </div>
        </div>
        {/* <div className="w-full left-0 absolute -bottom-72 min-h-96">
            <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50" />
        </div> */}
    </footer>
  )
}

export default Footer