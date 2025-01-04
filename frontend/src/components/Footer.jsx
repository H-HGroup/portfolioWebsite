import React from 'react'
import github from '../assets/footer/github.png'
import telegram from '../assets/footer/telegram.png'
import linkedin from '../assets/footer/linkedin.png'
import email from '../assets/footer/email.png'





const Footer = () => {
  return (
    <footer className='relative  pt-12 '>
        <div className=' size-[1600px] rounded-full -z-10  absolute  left-1/2 -translate-x-1/2  bg-color-8 opacity-25  blur-[80px] '></div>
        {/*<div className='absolute h-[300px] w-[1600px]  -bottom-10 left-1/2 -translate-x-1/2 bg-color-8 opacity-30  [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div>*/}
        <div className='container'>
            <div className='border-t border-white/15 flex lg:flex-row items-center lg:justify-between py-4 text-sm gap-8 flex-col justify-center '>
                <div className='text-n-1/50'>&copy; 2025. All rights reserved.</div>
                <nav className='flex flex-row gap-4'>
                        <a className='cursor-pointer'>
                            <div className=' bg-n-10/20 transition-colors hover:bg-color-1/20 size-10 mb-2 rounded-full flex items-center justify-center'>
                                <img  src={github} className='size-1/2 opacity-50' />
                            </div>
                        </a>
                        <a className='cursor-pointer'>
                            <div className='bg-n-10/20 transition-colors hover:bg-color-1/20 size-10 mb-2 rounded-full flex items-center justify-center'>
                                <img  src={telegram} className='size-1/2 opacity-50' />
                            </div>
                        </a>
                        <a className='cursor-pointer'>
                            <div className='bg-n-10/20 transition-colors hover:bg-color-1/20 size-10 mb-2 rounded-full flex items-center justify-center'>
                                <img  src={email} className='size-1/2 opacity-50' />
                            </div>
                        </a>
                        <a className='cursor-pointer'>
                            <div className='bg-n-10/20 transition-colors hover:bg-color-1/20 size-10 mb-2 rounded-full flex items-center justify-center'>
                                <img  src={linkedin} className='size-1/2 opacity-50' />
                            </div>
                        </a>
                        
                </nav>
            </div>

        </div>
      
    </footer>
  )
}

export default Footer
