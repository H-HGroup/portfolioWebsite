import React, { Fragment } from 'react'
import starBlack from "../assets/hero/starBlack.png"

export const word =[
    "On-time delivery",
    "Excellent quality",
    "Customer-friendly",
    "Support",
    "Professional service",
    "Reasonable price",
    "User experience",
    "Loading speed",
    "Practical and modern",
    "Precise planning",
]



const Tape = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-clip'>
        
        <div className='bg-gradient-to-r from-color-11 to-color-8  -rotate-3 lg:-rotate-2 -mx-1'>
            <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
            <div className='flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:20s]'>
                {[...new Array(2)].fill(0).map((_, idx) =>(
                    <Fragment key={idx}>
                        {word.map((word) =>(
                            <div key={word} className='inline-flex gap-4 items-center'>
                                <span className='uppercase text-sm text-n-12 font-extrabold'>{word}</span>
                                <img src={starBlack} className='size-5 -rotate-12' />
                            </div>

                        ))}
                

                    </Fragment>
                ))}
                

            </div>

            </div>
            

        </div>
      
    </div>
  )
}

export default Tape
