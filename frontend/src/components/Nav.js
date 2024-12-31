import React from 'react'

const Nav = () =>{
    return (
        <div>
            <ul className='flex cursor-pointer'>
                <li className='mx-3 my-4 text-2xl text-white-900 hover:text-white-700 transition'>Home</li>
                <li className='mx-3 my-6 text-white-900 hover:text-white-700 transition'>portfolio</li>
                <li className='mx-3 my-6 text-white-900 hover:text-white-700 transition'>about</li>
                <li className='mx-3 my-6 text-white-900 hover:text-white-700 transition'>experience</li>
                <li className='mx-3 my-6 text-white-900 hover:text-white-700 transition'>educations</li>
            </ul>
        </div>
        
    )
}

export default Nav