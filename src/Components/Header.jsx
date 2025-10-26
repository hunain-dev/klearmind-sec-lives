import React, { useEffect, useState } from "react";
import Logo from "../assets/images/Logo.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
    className={`hidden md:opacity-1 lg:opacity-100 lg:flex fixed w-full z-50 px-40 text-[#282A2F] items-center justify-between transition-all duration-500 
    ${isScrolled ? "backdrop-blur-lg bg-white/60" : "bg-transparent"}`}
  >
      {/* Left Logo */}
      <div className="py-4">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-[1.8vw] object-contain" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="figee text-[1.8vh] h-full px-3 flex items-center justify-start gap-6 relative">
        <Link to="/Ketaminetherapy">
          <h4>Ketamine Therapy</h4>
        </Link>

        <Link to="/Wellnesthraypy">
          <h4>Wellness Therapy</h4>
        </Link>

        {/* Pricing Dropdown (on hover) */}
{/* Pricing Dropdown (hover + click both work) */}
<div
  className="relative cursor-pointer"
  onMouseEnter={() => setOpenDropdown(true)}
  onMouseLeave={() => setOpenDropdown(false)}
  onClick={() => setOpenDropdown(!openDropdown)}
>
   <h4 className="transition duration-200 select-none">
    Pricing
  </h4>

  {openDropdown && (
    <div className="absolute flex flex-col items-start justify-start top-5 left-0 bg-white border border-gray-300 rounded-xl z-50 gap-4 w-33 px-2 py-4 shadow-lg">
      <Link to="/Ketamineinfusion"> <h2 className="hover:text-black transition duration-200 cursor-pointer">
        Ketamine Infusion
      </h2></Link> 
    <Link to="/Wellnesthraypy"><h2 className="hover:text-black transition duration-200 cursor-pointer">
        Wellness Therapy
      </h2></Link>  
    </div>
  )}
</div>



     <Link hrefLang="/https://phr.charmtracker.com/login.sas?FACILITY_ID=d1c1a0dc62345265d5a5f433f503b5e7bdeb891e39118f0098ee2e5ce9d5cc8ae52254af78d5434b"> <h4>Patient Portal</h4></Link>  
        
        <Button
          btn="am i a candidate?"
          padding="py-2"
          border="border-gray-700"
          hoverEffect={false}
        />
      </div>
    </div>
  );
};

export default Header;
