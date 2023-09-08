import React from 'react'
import { HeroBg } from '../../assets'

const Hero = () => {
  return (
    <section className='header-bg m-auto p-6 px-20'>
      <div className='flex flex-row max-lg:flex-col'>
        <div className='flex flex-col justify-start max-lg:justify-center m-auto'>
          <h1 className='text-[82px] max-lg:text-[50px]'>
            <span className='text-[#fffbd5]'>The Open AI </span> <br className='leading-2' />
            <span className='text-[#99f2c8]'>Blogs</span>
            
          </h1>

          <p className='text-[#ee9ca7]' >Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> 
          Id laudantium debitis eaque dignissimos harum expedita aliquam illum tempore possimus nisi, eligendi illo ipsum minus maxime?</p>

        </div>

        <div className='flex justify-end max-lg:justify-center max-lg:mt-5'>
          <img src={HeroBg} className="w-[100%] max-lg:w-[50%]" alt="Logo" />
        </div>
      </div>
    </section>
  )
}

export default Hero
