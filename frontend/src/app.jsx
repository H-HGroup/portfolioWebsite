import React, { useEffect, useState } from 'react'; import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Nav from './components/Nav'

 

export function App() {  
  const [portfolio, setPortfolio] = useState([]);  
  const [experience, setExperience] = useState([]);  
  const [education, setEducation] = useState([]);  

  useEffect(() => {  
    getData();  
  }, []);  

  const getData = async () => {  
    try {  
      const educationResponse = await fetch('http://localhost:8000/education/');  
      if (!educationResponse.ok) throw new Error('Failed to fetch education data');  
      const educationData = await educationResponse.json();  
      setEducation(educationData);  

      const portfolioResponse = await fetch('http://localhost:8000/portfolio/');  
      if (!portfolioResponse.ok) throw new Error('Failed to fetch portfolio data');  
      const portfolioData = await portfolioResponse.json();  
      setPortfolio(portfolioData);  

      const experienceResponse = await fetch('http://localhost:8000/experience/');  
      if (!experienceResponse.ok) throw new Error('Failed to fetch experience data');  
      const experienceData = await experienceResponse.json();  
      setExperience(experienceData);  
    } catch (error) {  
      console.error("Fetch error: ", error); // خطا را در کنسول نمایش دهید  
      alert(error.message); // می‌توانید از alert برای اطلاع‌رسانی استفاده کنید  
    }  
  };  


  return (
    <>
      <Nav />  
      <div className='md:h-screen'>  
        <div className='md:w-2/4 w-10/12 mx-auto mt-10 mb-3'>  
          <h1>H and H Group</h1>  
          <p>We are open to work</p>  
        </div>  

        <div className='flex md:flex-row flex-col justify-between md:w-2/4 m-auto md:mt-24 p-8 border'>  
          <img  
            alt='logo' className='rounded-full w-64 h-64 mx-8' src='./profile1.png' />  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis obcaecati magni in, blanditiis accusantium quod, nam eligendi pariatur suscipit nemo iusto impedit modi voluptatum iure! Fuga nesciunt veniam velit.</p>
            
        </div>  
        <div className='h-screen mt-24'>
          <h3>
            education
          </h3>
          <p>Lorem ipsum dolor si Adipisci reiciendis obriatur suscipit neoluptatum iure! Fuga nesciunt veniam velit.</p>
          <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
            {education && education.map(e =>(
              <div className='border rounded-xsm p-3 shadow'>
                <h3 className='text-lg border-b-2 border-slate-200'>{e.school}</h3>
                <h5 className='py-2'>{e.years}</h5>
                <p>{e.descrption}</p>
              </div>
            ))}
            
          </div>


          <div className='h-screen mt-24'>
            <h3>
              portfolio
            </h3>
            <p>Lorem ipsum dolor si Adipisci reiciendis obriatur suscipit neoluptatum iure! Fuga nesciunt veniam velit.</p>
          <div className='grid grid-cols-3 gap-4 mx-5'>
            <div className='border rounded-xsm p-3 shadow'>
              <h3 className='text-lg border-b-2 border-slate-200'>box1</h3>
              <h5 className='py-2 text-blue-500 hover: text-blue-700 cursor-pointer'>link</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis obcaecati magni in, blanditiis accusantium quod, nam eligendi pariatur suscipit nemo iusto impedit modi voluptatum iure! Fuga nesciunt veniam velit.</p>
            </div>
           
            <div className='border rounded-xsm p-3 shadow'>
              <h3 className='text-lg border-b-2 border-slate-200'>box1</h3>
              <h5 className='py-2 text-blue-500 hover: text-blue-700 cursor-pointer'>link</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis obcaecati magni in, blanditiis accusantium quod, nam eligendi pariatur suscipit nemo iusto impedit modi voluptatum iure! Fuga nesciunt veniam velit.</p>
            </div>

            <div className='border rounded-xsm p-3 shadow'>
              <h3 className='text-lg border-b-2 border-slate-200'>box1</h3>
              <h5 className='py-2 text-blue-500 hover: text-blue-700 cursor-pointer'>link</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reiciendis obcaecati magni in, blanditiis accusantium quod, nam eligendi pariatur suscipit nemo iusto impedit modi voluptatum iure! Fuga nesciunt veniam velit.</p>
            </div>
          </div>
          </div>
          
        </div>
        
      </div> 
    </>
  )
}
