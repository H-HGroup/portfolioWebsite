import React from 'react'
import MemojiImage from "../assets/hero/memoji.png"
import Button from './button'
import curve from "../assets/hero/curve.png"
import "./Hero.Module.css"
import star from "../assets/hero/star.png"
import sparkle from "../assets/hero/sparkle.png"



const Hero = () => {
  return (
    <div className='py-32 container relative lg:py-25 z-0'>
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
        <div className='absolute inset-0 -z-30 opacity-5 background size-[1400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full '>
        </div>
        <div className=' lg:size-[800px] max-sm:size-[580px]  sm:size-[580px]   hero-ring1 '></div>
        <div className=' lg:size-[1000px] max-sm:size-[680px] sm:size-[680px]  hero-ring2 '></div>
        <div className=' lg:size-[1200px] max-sm:size-[780px] sm:size-[780px]  hero-ring3 '></div>
        <div className=' lg:size-[1400px] max-sm:size-[880px] sm:size-[880px]  hero-ring4 '></div>

        {/*stars*/}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-72deg] '>
          <div className='size-[800px] animate-spin [animation-duration:44s] '>
            <div className='inline-flex animate-spin [animation-duration:6s] rotate-[-18deg]'>
              <img src={star} className="size-28" />
            </div>
          </div>
        </div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[20deg] '>
          <div className='size-[550px] animate-spin [animation-duration:34s] '>
            <div className='inline-flex animate-spin [animation-duration:6s] rotate-[70deg]'>
              <img src={star} className="size-12" />
            </div>
          </div>
        </div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[98deg] '>
          <div className='size-[590px] animate-spin [animation-duration:38s] '>
            <div className='inline-flex animate-spin [animation-duration:6s] rotate-[-8deg]'>
              <img src={star} className="size-8" />
            </div>
          </div>
        </div>


        {/*sparkles*/}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-14deg] '>
          <div className='size-[430px] animate-spin [animation-duration:30s] '>
            <div className='inline-flex animate-spin [animation-duration:3s] rotate-[-76deg]'>
              <img src={sparkle} className="size-8 opacity-20" />
            </div>
          </div>
        </div>
        
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[79deg] '>
          <div className='size-[440px] animate-spin [animation-duration:32s] '>
            <div className='inline-flex animate-spin [animation-duration:3s] rotate-[11deg]'>
              <img src={sparkle} className="size-5 opacity-20" />
            </div>
          </div>
        </div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[178deg] '>
          <div className='size-[580px] animate-spin [animation-duration:36s] '>
            <div className='inline-flex animate-spin [animation-duration:3s] rotate-[-88deg]'>
              <img src={sparkle} className="size-10 opacity-20" />
            </div>
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[144deg] '>
          <div className='size-[800px] animate-spin [animation-duration:46s] '>
            <div className='inline-flex animate-spin [animation-duration:3s] rotate-[-54deg]'>
              <img src={sparkle} className="size-14 opacity-20 " />
            </div>
          </div>
        </div>

        {/*circles*/}
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[85deg] '>
          <div className='size-[720px] animate-spin [animation-duration:40s] '>
            <div className='inline-flex  rotate-[5deg]'>
              <div  className="size-3 opacity-20 bg-color-1 rounded-full" ></div>
            </div>
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-25deg] '>
          <div className='size-[820px] animate-spin [animation-duration:48s] '>
            <div className='inline-flex  rotate-[-49deg]'>
              <div  className="size-2 opacity-20 bg-color-1 rounded-full" ></div>
            </div>
          </div>
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] '>
          <div className='size-[750px] animate-spin [animation-duration:42s] '>
            <div className='inline-flex  rotate-[-85deg]'>
              <div  className="size-3.5 opacity-50 bg-color-1 rounded-full" ></div>
            </div>
          </div>
        </div>
      </div>  
      

      <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]'>
        <div className='flex  flex-col items-center '>
            <img className='size-[100px]' src={MemojiImage} alt='person behind laptap' />
            <div className='bg-n-12 border-n-10 inline-flex items-center gap-3 rounded-lg px-3 py-1.5'>
                <div className=' relative bg-color-4 size-2.5 rounded-full '>
                  <div className=' absolute bg-color-4  rounded-full inset-0 animate-ping '></div>
                </div>
                <div className='text-sm'>Available for new project</div>
            </div>
        </div>
        
        <h1 className='h1 items-center flex flex-col justify-center text-center mt-8 '>
            Hi everyone 
            <div className='flex flex-row '>
            <h1>
            <span className="inline-block relative mr-4">
               welcome{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
              to our site ....
            </h1> 
            </div>
        </h1>
        <p className='body-1 text-n-2  mt-4  '>
        I specialize in creating efficient web applications from designs.<br/> Let's discuss your project!
        </p>
        <Button className='mt-8 text-n-12' white>
            Get started 
        </Button>
       
      </div>
    </div>
    
  )
}

export default Hero
