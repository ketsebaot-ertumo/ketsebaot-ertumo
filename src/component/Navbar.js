import { Email, Instagram, LinkedIn, Menu } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import Me from "../images/KetsebaotE.png"
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function Navbar(){

    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      useEffect(() => {
        const hash = location.hash;
        if (hash) {
          const section = document.querySelector(hash);
          if (section) {
            const elementOffsetTop = section.offsetTop;
            const shiftAmount = 80;
            const scrollPosition = elementOffsetTop - shiftAmount;
            window.scrollTo({ top: scrollPosition, behavior: 'smooth' });
          }
        }
      }, [location]);

    return(
        <>
            <div className={`flex justify-between px-5 sm:px-10 py-5 fixed z-40 w-full h-[44px] md:h-[60px] ${scrolled ? 'bg-black-400' : 'bg-transparent'}`}>
                <div className="flex items-center gap-5">
                    <div><Avatar src={Me} alt="" /></div>
                    {/* <div>Ketsebaot Ertumo</div> */}
                    <div className="hidden md:flex hover:text-gray-400">ertumoketsebaot@gmail.com</div>
                </div>

                <div className="md:hidden"><Menu /></div>

                <div className="hidden md:flex gap-8">
                    <Link to='/#skills'><div className="hover:text-gray-400">Skills</div></Link>
                    <Link to='/#projects'><div className="hover:text-gray-400">Projects</div></Link>
                    <div className="flex gap-5">
                        <Link className=" hover:text-gray-400" to="www.linkedin.com/in/ketsebaot-ertumo-133346245"><LinkedIn /></Link>
                        <Link className=" hover:text-gray-400" to="https://www.instagram.com/e_ketsebaot"><Instagram /></Link>
                        <Link className="hover:text-gray-400" to="mailto:ertumoketsebaot@gmail.com"><Email /></Link>
                        
                    </div>
                    <Link to='/#contact-me'>
                      <div className="rounded-lg border border-white py-1 px-2 flex inline-block items-center hover:text-gray-400">
                          <button>Get in Touch</button>
                      </div>
                    </Link>
                </div>
            </div>
            
        </>
    )

}