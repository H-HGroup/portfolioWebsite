import React from 'react'
import servicesTitle from "../assets/services/servicesTitle.png"
import Button from './button'
import "./Project.Module.css"
import Capture from "../assets/services/Capture.png"
import Capture2 from "../assets/services/Capture2.png"
import Capture3 from "../assets/services/Capture3.png"
import Capture4 from "../assets/services/Capture4.png"



import stars from "../assets/services/stars.png"




const Services = () => {
  return (
    <div className='container'>
        <div className='flex flex-col items-center relative'>
            <img src={servicesTitle} className=' inset-0 -z-10 w-[350px] opacity-50 ' />
            <h2 className='h4 absolute mt-[176px] -ml-[180px] opacity-90'>Our</h2>
            <h2 className='h4 absolute mt-[234px] ml-[120px] opacity-90 '>Services</h2>
            <img src={stars} className='-z-11 -mt-[50px]  -mb-[90px] w-[1200px] opacity-60 '/>
        </div>
        
        <div className=' relative flex flex-col items-center justify-center py-20'>
            <div className='relative bg-color-9/10 rounded-3xl w-3/4 h-[350px]  flex flex-col justify-center items-center  '>
                <div className='absolute inset-0 -z-10 opacity-10 background rounded-3xl'></div>
                <div className='absolute  flex flex-row gap-10 items-center justify-center'>
                        <div className='border border-white/20 size-60 rounded-2xl bg-n-11/50 backdrop-blur-sm px-5 py-6' >
                        <img src={Capture} className='w-[250px] rounded-lg' />
                        <a className='relative'>
                            <button className=' bg-n-1/5 backdrop-blur-sm h-14 w-full  font-semibold  inline-flex items-center justify-center gap-2  px-6 rounded-lg mt-2 overflow-hidden transition-colors  hover:text-color-1'>
                                <span>UI/UX Design</span>
                                
                                <div className='absolute ml-16 inset-0 -z-10 bg-color-1 blur-lg size-15 rounded-full opacity-50'></div>
                            </button>
                        </a>
                        </div>
                        <div className='border border-white/20 size-60 rounded-2xl bg-n-11/50 backdrop-blur-sm px-5 py-6' >
                        <img src={Capture2} className='w-[250px] rounded-lg' />
                        <a className='relative'>
                            <button className=' bg-n-1/5 backdrop-blur-sm h-14 w-full  font-semibold inline-flex items-center justify-center gap-2  px-6 rounded-lg mt-2 overflow-hidden transition-colors  hover:text-color-1'>
                                <span>Graphic Design</span>
                                <div className='absolute ml-16 inset-0 -z-10 bg-color-1 blur-lg size-15 rounded-full opacity-50'></div>
                            </button>
                        </a>
                        </div>
                        <div className='border border-white/20 size-60 rounded-2xl bg-n-11/50 backdrop-blur-sm px-5 py-6' >
                        <img src={Capture3} className='w-[250px] rounded-lg' />
                        <a className='relative'>
                            <button className=' bg-n-1/5 backdrop-blur-sm h-14 w-full  font-semibold inline-flex items-center justify-center gap-2  px-6 rounded-lg mt-2 overflow-hidden transition-colors hover:text-color-1'>
                                <span>Front-End </span>
                                <div className='absolute ml-16 inset-0 -z-10 bg-color-1 blur-lg size-15 rounded-full opacity-50'></div>
                            </button>
                        </a>
                        </div>
                        <div className='border border-white/20 size-60 rounded-2xl bg-n-11/50 backdrop-blur-sm px-5 py-6' >
                        <img src={Capture4} className='w-[250px] rounded-lg' />
                        <a className='relative'>
                            <button className=' bg-n-1/5 backdrop-blur-sm h-14 w-full  font-semibold inline-flex items-center justify-center gap-2  px-6 rounded-lg mt-2 overflow-hidden transition-colors  hover:text-color-1'>
                                <span>Back-End </span>
                                <div className='absolute ml-16 inset-0 -z-10 bg-color-1 blur-lg size-15 rounded-full opacity-50'></div>
                            </button>
                        </a>
                        </div>
                        
                        

                </div>
                <div className='absolute mt-[350px] bg-n-11 py-3 px-4 rounded-[15px] rounded-tr-[35px]'>
                <Button >Our Services</Button>

                </div>

            </div>
            
                
                    
        </div>
    </div>
  )
}

export default Services
