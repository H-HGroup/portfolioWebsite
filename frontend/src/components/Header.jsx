import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import Button from "./button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import ButtonGradient from '../assets/svg/ButtonGradient'


const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
        if (openNavigation) {
          setOpenNavigation(false);
          enablePageScroll();
        } else {
          setOpenNavigation(true);
          disablePageScroll();
        }
      };
    
      const handleClick = () => {
        if (!openNavigation) return;
    
        enablePageScroll();
        setOpenNavigation(false);
      };
    return (
        <div className={`fixed top-0 left-0 w-full z-40 bg-n-11/70 backdrop-blur-sm border-b border-n-10/20 lg:bg-n-11/70 lg:backdrop-blur-sm ${openNavigation ? "bg-n-11/70" : "bg-n-11/70 backdrop-blur-sm" }`}>
          <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="block w-[12rem] xl:mr-8 " href="#hero">
            <img src="../public/logo.png" width={190} height={40} alt="H&H Group" />
            </a>
            <nav className={` ${openNavigation ? "flex" : "hidden"} fixed top-[5rem] left-0  right-0 bottom-0 bg-n-11 lg:static lg:flex lg:mx-auto lg:bg-transparent `} >
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row lg:bg-transparent   sm:m-x-0 sm:bg-black  max-sm:m-x-0 max-sm:bg-black/95 max-sm:w-full sm:w-full">
                  <div className="  flex text items-center lg:flex-row sm:flex-col max-sm:flex-col  " >
                    <a className={` block relative font-code txt-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs cursor-pointer`}>Home</a>
                    <a className={` block relative font-code txt-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs cursor-pointer `}>Services</a>
                    <a className={` block relative font-code txt-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs cursor-pointer `}>Aboute Us</a>
                    <a className={` block relative font-code txt-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs cursor-pointer `}>Portfolio</a>
                    <a className={` block relative font-code txt-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs cursor-pointer `}>Blog</a>
                    <a className={` block relative font-code txt-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs cursor-pointer lg:hidden  max-sm:relative sm:relative `}>Sign in</a>
                    <a className={` block relative font-code txt-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs cursor-pointer lg:hidden  max-sm:relative sm:relative `}>Contact Us</a>
                  </div>
                  

                    {/*{navigation.map((item) => (
                        <a 
                        key={item.id} 
                        href={item.url}
                        onClick={handleClick}
                        className={`block relative font-code txt-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${item.onlyMobile ? "lg:hidden" : "" } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs `}
                        >
                            {item.title}
                        </a>
                    ))}*/}
                </div>
                <HamburgerMenu />

            </nav>
            <a className="botton hidden font-code mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block" href="#signup">
                Sign in
            </a>
            <Button className="hidden lg:flex" href="#contact">
                Contact Us
            </Button>
            <Button className="ml-auto lg:hidden px-3"  onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation} />
            </Button>
            <ButtonGradient />

            
          </div>
        </div>


  )
}

export default Header;
