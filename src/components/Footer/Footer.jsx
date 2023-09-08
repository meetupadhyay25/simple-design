import React from 'react'
import { logo } from '../../assets'

const Footer = () => {
  return (
   <footer className='m-auto p-6 px-20 flex flex-row justify-between max-lg:flex-col header-bg max-lg:items-center '>
    <img src={logo} width={125} height={125} alt="" className='flex justify-start max-lg:m-3' />
    <p className='text-white text-bold text-sm'> CopyRight 2023 TechBlog. All right Reserved.</p>
   </footer>
  )
}

export default Footer
