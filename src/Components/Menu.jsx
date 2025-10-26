import React, { useEffect, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/Logo.png";
import Button from "./Button";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [priceDropdown, setPriceDropdown] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setPriceDropdown(false);
  }, [location]);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

    if (open) {
      tl.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: 0, duration: 1.2, ease: "power4.out" }
      ).fromTo(
        linksRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
        },
        "-=0.3"
      );
    } else {
      tl.to(linksRef.current, {
        x: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.inOut",
      }).to(menuRef.current, {
        x: "100%",
        duration: 1,
        ease: "power4.in",
      });
    }
  }, [open]);

  return (
    <div className="fixed top-0 left-0 w-full z-[999] lg:hidden ">

      <div className="py-4 lg:px-2 flex lg:items-center  lg:gap-12 md:gap-115 gap-14  md:px-5">
        <Link to="/">
          <img src={Logo} alt="Logo" className="md:h-[4vw] px-1 lg:h-[7vw]  h-[6.3vw] object-contain" />
        </Link>
        
      <div>
  <Button 
              btn="a'm i candidate?" 
              bgcolor="" 
              textcolor="black" 
              fontSize="md:text-[1.1vw] lg:text-[1vw] text-[3.2vw]"
              padding="lg:py-3 py-1 lg:px-6 px-1 md:px-5 md:py-2   " 
              border="border" 
             
              hoverEffect={false}
              to="https://calendly.com/admin-klearmindclinics/30min?month=2025-07"
              
            />      </div>
      </div>


      {/* Hamburger / Close */}
      <div className="p-4 flex justify-end absolute top-0 right-0 z-[1000]">
        {open ? (
          <IoMdClose
            onClick={() => setOpen(false)}
            className="text-black text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
          />
        ) : (
          <RxHamburgerMenu
            onClick={() => setOpen(true)}
            className="text-black text-3xl cursor-pointer transition-transform duration-300 hover:rotate-90"
          />
        )}
      </div>

      <motion.div
        ref={menuRef}
        drag="x"
        dragConstraints={{ left: -200, right: 0 }}
        dragElastic={0.1}
        onDragEnd={(event, info) => {
          if (info.point.x > 100) setOpen(false);
        }}
        className="fixed top-0 right-0 h-full w-full bg-white text-black flex flex-col items-center justify-center gap-4 md:gap-8 translate-x-full cursor-grab active:cursor-grabbing"
      >
        {[
          { name: "Ketamine therapy", path: "/Ketaminetherapy" },
          { name: "Wellness therapy", path: "/Wellnesthraypy" },
          { name: "Pricing", path: "/pricing" },
          { name: "Patient portal", path: "https://phr.charmtracker.com/login.sas?FACILITY_ID=d1c1a0dc62345265d5a5f433f503b5e7bdeb891e39118f0098ee2e5ce9d5cc8ae52254af78d5434b" },
        ].map((item, index) => {
          if (item.name === "Pricing") {
            return (
              <div
                key={index}
                ref={(el) => (linksRef.current[index] = el)}
                className="flex flex-col items-center gap-2 md:gap-4 md:text-4xl"
              >
                {/* Pricing with dropdown icon */}
                <div
                  onClick={() => setPriceDropdown(!priceDropdown)}
                  className="text-3xl md:text-5xl fontspring text-[#32140C] font-[550] cursor-pointer flex items-center gap-2"
                >
                  {item.name}
                  {priceDropdown ? (
                    <IoChevronUp className="text-2xl  mt-1" />
                  ) : (
                    <IoChevronDown className="text-2xl mt-1" />
                  )}
                </div>

                {/* Dropdown Content */}
                {priceDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center gap-2 mt-2"
                  >
                    <Link
                      to="/Ketamineinfusion"
                      className="fontspring text-xl  md:text-4xl text-[#32140C]  transition"
                    >
                      Ketamine infusion

                    </Link>
                    <Link
                      to="/Wellnesthraypy"
                      className="fontspring text-xl md:text-4xl text-[#32140C] transition"
                    >
                      Wellness Therapy

                    </Link>
                  </motion.div>
                )}
              </div>
            );
          }

          return (
            <Link
              to={item.path}
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              className="text-3xl md:text-5xl fontspring text-[#32140C] font-[550] cursor-pointer opacity-0"
            >
              {item.name}
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Menu;
