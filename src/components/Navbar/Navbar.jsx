import React, { useState } from 'react'
import { menu, logo, close } from '../../assets'

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <header className='p-6 px-20 m-auto header-bg w-full'>
            <nav className='flex justify-between'>
                <a href="/">
                    <img src={logo} alt="logo" width={125} height={125} />
                </a>
                <ul className='flex gap-7 max-lg:hidden'>
                    <li>
                        <a href="/" className='font-semibold text-lg text-white'>Home</a>
                    </li>
                    <li>
                        <a href="/" className='font-semibold text-lg text-white'>Blogs</a>
                    </li>
                    <li>
                        <a href="/" className='font-semibold text-lg text-white'>Services</a>
                    </li>
                    <li>
                        <a href="/" className='font-semibold text-lg text-white'>About</a>
                    </li>
                </ul>

                <div className='hidden max-lg:block mt-3'>
                    <img src={toggle ? close : menu} width={25} height={25} alt="menu logo" onClick={() => setToggle(!toggle)} />
                </div>

                <div className={`${toggle ? 'flex' : 'hidden'} header-bg justify-end items-center p-6 rounded-xl right-0 mx-10 absolute top-20`}>
                    <ul className='gap-7 flex justify-end items-start flex-col flex-1 '>
                        <li>
                            <a href="/" className='font-semibold text-lg text-white'>Home</a>
                        </li>
                        <li>
                            <a href="/" className='font-semibold text-lg text-white'>Blogs</a>
                        </li>
                        <li>
                            <a href="/" className='font-semibold text-lg text-white'>Services</a>
                        </li>
                        <li>
                            <a href="/" className='font-semibold text-lg text-white'>About</a>
                        </li>
                    </ul>

                </div>

            </nav>
        </header>
    )
}

export default Navbar
