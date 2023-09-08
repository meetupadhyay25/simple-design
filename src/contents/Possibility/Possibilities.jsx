import React from 'react'
import { main } from '../../assets'

const Possibilities = () => {
    return (
        <section className=' m-auto p-6 px-20'>
            <div className='flex flex-row max-lg:flex-col'>
                <div className='flex justify-start max-lg:justify-center max-lg:mt-5'>
                    <img src={main} className="w-[100%] max-lg:w-[50%]" alt="Logo" />
                </div>


                <div className='flex flex-col justify-end max-lg:justify-center max-lg:mt-7 m-auto'
                >
                    <h1 className='text-[50px] max-lg:text-[25px] text-[#AE67FA] leading-none'>
                        <span className=''>The Possibilities are </span> <br className='leading-2' />
                        <span className=''>Beyond Your imagination</span>

                    </h1>

                    <p className='text-[#ee9ca7] mt-5 '  >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                        Id laudantium debitis eaque dignissimos harum expedita aliquam illum tempore possimus nisi, eligendi illo ipsum minus maxime? <br />
                        lorem25                        
                        </p>

                </div>


            </div>
        </section>
    )
}

export default Possibilities
