import React from 'react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import "./Project.Module.css"
import checkcircle from "../assets/project/check-circle.png"
import arrowupright from "../assets/project/arrow-up-right.png"
import Button from "./button";
import { transform } from 'framer-motion'




const Project = () => {
  const { t } = useTranslation();
  const [portfolio, setPortfolio] = useState([]);  


  useEffect(()=>{
    getData()
  },[])

  const getData = async () => {  
    try {  

      const portfolioResponse = await fetch('http://localhost:8000/portfolio');  
      if (!portfolioResponse.ok) throw new Error('Failed to fetch portfolio data');  
      const portfolioData = await portfolioResponse.json();  
      setPortfolio(portfolioData);  

    } catch (error) {  
      console.error("Fetch error: ", error);  
      alert(error.message);  
    }  
  };  


  return (
    <section className='py-14 sm:mt-0 max-sm:mt-0'>
      <div className='size-[1700px] rounded-full -z-20  absolute -mt-200  -ml-[1700px] bg-color-8 opacity-50  blur-[200px] '></div>
      <div className='container'>
        <div className=' items-center text-center '>

            <p className='inline uppercase font-semibold tracking-widest bg-gradient-to-r from-color-1 to-color-7 text-transparent bg-clip-text'>{t('Real  Results')}</p>
            <h2 className='h4 text-center mt-4'>Featured Projects</h2>
            <p className='caption text-center text-white/60 mt-2 max-w-md mx-auto lg:text-lg'>Highlighting projects that turn vision into reality and drive remarkable results.</p>
        </div>
        <div className='flex flex-col mt-10 md:mt-16 gap-20 items-center'>
          { portfolio && portfolio.map (p =>(
            <div key={p.id} className='bg-gradient-to-r from-color-1/5 to-n-11/10    rounded-3xl z-0  after:z-10 relative after:content-[""]  after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl  px-8 pt-8 after:pointer-events-none md:pt-12 md:px-10 lg:pt-16 lg:px-20 overflow-hidden  w-3/4'>
              <div className='absolute inset-0 -z-10 opacity-10 background'></div>
              <div className='lg:grid lg:grid-cols-2 lg:gap-16'>
                <div className='lg:pb-16'>
                  <div className='flex'>
                    <div className='gap-2 bg-gradient-to-r from-color-1 to-color-7 text-transparent bg-clip-text inline-flex font-bold uppercase tracking-widest text-sm '>
                      <span>{p.fieldOfWork}</span>
                      <span>&bull;</span>
                      <span>{p.year}</span>
                    </div>
                  </div>
                  <h3 className='text-xl mt-2 font-semibold md:text-3xl md:mt-5 text-white/90 '>{p.title}</h3>
                  <hr className='border-t-2 border-white/5 mt-4' />
                  <ul className='flex flex-col gap-4 mt-4'>
                    <li className='flex gap-2 text-sm text-white/50 md:text-base'>
                      <img src={checkcircle} className="size-5 opacity-50 md:size-6" />
                      <span>{p.tip1}</span>
                    </li>
                    <li className='flex gap-2 text-sm text-white/50 md:text-base'>
                      <img src={checkcircle} className="size-5 opacity-50 md:size-6" />
                      <span>{p.tip2}</span>
                    </li>
                    <li className='flex gap-2 text-sm text-white/50 md:text-base'>
                      <img src={checkcircle} className="size-5 opacity-50 md:size-6" />
                      <span>{p.tip3}</span>
                    </li>

                  </ul>
                  <a href={p.url}>
                    <button className='bg-white text-n-11 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6'>
                      <span>visit live site</span>
                      <img src={arrowupright} className="size-4" />
                    </button>
                  </a>
                </div>
                <div>
                  <img src={p.image} alt={p.title} className='mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none' />
                </div>
              </div>
            </div>
          ))}
          <Button>View All Projects</Button>

        </div>


      </div>



    </section>

  )
}

export default Project
