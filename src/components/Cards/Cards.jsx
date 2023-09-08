import React from 'react'
import { Blog02 } from '../../assets'

import { Buttons } from '../index'

const Cards = ({ id, title, imageUrl, content }) => {
    return (
        <div className='mt-6 flex flex-wrap' key={id}>

            <div className='max-w-sm rounded overflow-hidden shadow-lg m-auto'>
                <img src={imageUrl} className='w-full' alt="" />
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2 text-gray-200'>
                        {title}
                    </div>
                    <p className='text-base text-gray-300'>{content.slice(0, 100)}</p>

                    <Buttons />
                </div>

                <div className='px-6 pt-4 pb-2'>
                    <span className='text-gray-100 inline-block rounded-full px-3 py-1 mr-2 mb-2 text-sm text-semibold  bg-tags'>Photography</span>
                    <span className='text-gray-100 inline-block rounded-full px-3 py-1 mr-2 mb-2 text-sm text-semibold bg-tags'>Photography</span>
                    <span className='text-gray-100 inline-block rounded-full px-3 py-1 mr-2 mb-2 text-sm text-semibold bg-tags'>Photography</span>
                </div>
            </div>



        </div>
    )
}

export default Cards
