import React from 'react'

const Nav = () =>{
    return (
        <div>
            <ul className='flex bg-stone-100 cursor-pointer'>
                <li className='mx-3 my-4 text-2xl text-slate-900 hover:text-slate-700 transition'>Home</li>
                <li className='mx-3 my-6 text-slate-900 hover:text-slate-700 transition'>portfolio</li>
                <li className='mx-3 my-6 text-slate-900 hover:text-slate-700 transition'>about</li>
                <li className='mx-3 my-6 text-slate-900 hover:text-slate-700 transition'>experience</li>
                <li className='mx-3 my-6 text-slate-900 hover:text-slate-700 transition'>educations</li>
            </ul>
        </div>
    )
}

export default Nav