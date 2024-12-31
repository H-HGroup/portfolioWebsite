import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import Nav from './components/Nav'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />  
      <div className='h-screen'>  
        <div className='w-2/4 mx-auto mt-10 mb-3'>  
          <h1>H and H Group</h1>  
          <p>We are open to work</p>  
        </div>  

        <div className='flex justify-between w-2/4 m-auto pt-10 border'>  
          <img  
            alt='logo' className='rounded-full w-64 h-64 mx-8' src='./profile1.png' />  
        </div>  
        <div>
          <h3>
            projects
          </h3>
        </div>
        <div>
          <h3>
            educations
          </h3>
        </div>
        <div>
          <h3>
            experience
          </h3>
        </div>
      </div> 
    </>
  )
}
