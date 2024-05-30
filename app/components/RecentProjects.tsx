import React from 'react'
import { projects } from '@/data/'
import { PinContainer } from './ui/3dPin'
import { FaLocationArrow } from 'react-icons/fa'


const RecentProjects = () => {
  return (
    <div id="products" className='py-20'>
        <h1 className='heading'>Check out our {' '}<span className='text-purple'>Recent Products</span></h1>
        <div className='flex flex-wrap items-center justify-center p-4 gap-16 gap-y-28 mt-10'>
            {projects.map(({id, title,des, img,iconLists,link}) => (
                <div key={id} className='sm:h-[41rem] h-[32.5rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <PinContainer title={title} href={link}>
                        <div className='sm:w-[570px] w-[80vw] sm:h-[40vh] relative flex item-center justify-center  overflow-hidden h-[30vh] mb-10'>
                            <div className='relative h-full w-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img src={img} alt={title} className='z-10 absolute object-fill -bottom-[5%] rotate-45' />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                                {des}
                            </p>
                            <div className='hidden items-center justify-between mt-7 mb-3'>
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => 
                                    (
                                        <div style={{transform: `translateX(-${5*index*2}px)`}} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 h-8 flex justify-center items-center" key={icon}>
                                             <img src={icon} alt={icon} className='p-2 ' />

                                        </div>
                                       
                                    ))}
                                </div>
                                <div className='flex justify-center items-center'><p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                                <FaLocationArrow className='ms-3' color="#CBACF9"/></div>
                            </div>
                    </PinContainer>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects