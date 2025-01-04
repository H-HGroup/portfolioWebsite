import React from 'react'
import aboutTitle from "../assets/about/aboutTitle.png"
import Button from './button'
import logo from "../assets/about/logo.png"
import rightShape from "../assets/about/rightShape.png"
import leftShape from "../assets/about/leftShape.png"


const About = () => {
  return (
    <div className='container py-14'>
      <div className='flex flex-col items-center relative'>
          <img src={aboutTitle} className=' inset-0 -z-10 w-[350px] opacity-50 ' />
          <h2 className='h4 absolute mt-[142px] -ml-[110px] opacity-90'>About</h2>
          <h2 className='h4 absolute mt-[202px] ml-[180px] opacity-90 '>US</h2>
        </div>
     
        <div className='flex flex-col  items-center pt-4 -mb-4'>
            <div className='-mb-10 size-[400px] bg-color-8 rounded-full opacity-40 blur-[90px] -z-10'></div>
            <div className='flex items-center flex-row w-full justify-around -mt-[290px]'>
                <img src={leftShape} className=' inset-0 -z-10 w-[250px] opacity-50 ' />
                <img src={rightShape} className=' inset-0 -z-10 w-[250px] opacity-50 ' />
            </div>

            <div className=' absolute flex flex-col items-center justify-center'>
              <img src={logo}  className='w-[420px] mt-15'/>
            </div>
        </div>
      

        <div className=' relative flex flex-col items-center justify-center py-20  '>
            <div className='relative bg-color-9/10 rounded-3xl w-3/4   flex flex-col justify-center items-center  '>
                <div className='absolute inset-0 -z-5 opacity-10 background rounded-3xl'></div>
                <div className='flex items-center justify-center p-16 text-justify text-n-1/80'>
                  <p>Our team takes pride in offering comprehensive web design services, including backend and frontend development, UI/UX design, and graphic design to meet your needs. This website serves as a bridge between us and our valued clients, allowing you to get acquainted with our services and easily place your orders. We believe that every project tells a story, and we strive to narrate those stories in the best possible way with our creativity and expertise. Our goal is to foster close interactions and deliver the highest quality service, enabling us to become your successful partner in your projects.</p>
                  
                </div>
                
 
                <div className='absolute mt-[275px] bg-n-11 py-3 px-4 rounded-[15px] rounded-tr-[35px]'>
                <Button >Know more</Button>

                </div>

            </div>
            
                
                    
        </div>

    </div>
  )
}

export default About
