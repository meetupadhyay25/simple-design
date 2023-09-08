import React from 'react'
import { blogs } from '../../constants'

import { Buttons, Cards } from '../../components'

const Blogs = () => {
    return (
        <section className='p-6 w-full m-auto px-20'>
            <div>
                <h1 className='text-[50px] text-[#C6FFDD] max-lg:text-[25px]'>
                    <span>A lot is happening</span> <br />
                    <span>We are blogging about it. </span>
                </h1>

                <div className='flex flex-wrap'>
                    {blogs.map((blog) => (
                      <Cards id={blog.id} title={blog.title} content={blog.content} imageUrl={blog.imageUrl} />
                    ))}

                </div>


            </div>
        </section>
    )
}

export default Blogs
