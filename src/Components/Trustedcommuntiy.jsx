import React, { useEffect, useRef } from "react";
import flower from "../assets/images/Flower.png";
import leaf from "../assets/images/Leaf.png";
import gsap from "gsap";
import useScrollAnimation from '../hooks/useScrollAnimation';

const Trustedcommuntiy = () => {
  const circleRef = useRef(null);
  
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const circleContainerRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 1 })

  useEffect(() => {
    // Continuous rotation animation
    gsap.to(circleRef.current, {
      rotation: 360,
      duration: 50, // 20 seconds for full rotation
      repeat: -1, // Infinite loop
      ease: "none", // Linear rotation
    });
  }, []);

  return (
    <div className="w-full lg:mt-14 lg:px-40 py-5 lg:p-0 p-5">
      <div className="lg:w-[98%] bg-[#FDF9E9] rounded-4xl grid grid-cols-1 py-10 lg:py-16">
        {/* Top text section */}
        <div className="h-full lg:p-0 p-2 flex items-center justify-center flex-col text-center gap-3 ">
          <div ref={subtitleRef} className="flex items-center gap-2 whitespace-nowrap justify-center ">
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] text-[3vw] md:text-[2vw] text-gray-600 tracking-wide">
              Award-Winning Care, Year After Year
            </span>
          </div>
          <h2 ref={titleRef} className="fontspring text-[#361810] lg:text-4xl md:text-3xl md:leading-9 lg:leading-10 leading-7 text-[6vw]">
            Trusted by the Sacramento community <br />
            ten years and counting
          </h2>
        </div>

        {/* Circle inside the box */}
        <div ref={circleContainerRef} className="relative lg:mt-10 md:mt-10   mt-10 flex items-center justify-center overflow-hidden">
          <div 
            ref={circleRef}
            className="circle  relative w-20 lg:left-5 lg:-mt-23 -mt-20 h-96 lg:w-[10vw] lg:h-[24vw] flex items-center justify-center"
          >
            {[...Array(8)].map((_, i) => {
              const angle = (i / 8) * 360; // 8 positions evenly
              const radius = 140; // circle size
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              const imgSrc = i % 2 === 0 ? flower  : leaf;

              return (
                <img
                  key={i}
                  src={imgSrc}
                  alt="decor"
                  className="lg:w-20 w-13  absolute"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustedcommuntiy;
