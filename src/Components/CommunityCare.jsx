import React from "react";
import flower from "../assets/images/Flower.png";
import leaf from "../assets/images/Leaf.png";
import useScrollAnimation from '../hooks/useScrollAnimation';
const CommunityCare = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const descriptionRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const circleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  
  return (
    <div className=" w-full m-auto lg:mt-23 mt-2 p-10 lg:px-38 px-3">
      <div className="h-full  rounded-3xl grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 overflow-hidden bg-[#FDF9E9] m-auto">
        <div className="h-full lg:px-7 px-3 lg:py-7 py-7">
          <h3 ref={subtitleRef} className="figee lg:text-[1.9vh] md:text-[1.8vw]  text-[3.5vw] lg:mb-2 mb-1">
          Community Care

          </h3>
          <h2 ref={titleRef} className="fontspring lg:text-[2.3vw] text-[#32140C] text-[6.3vw] md:text-[3vw] lg:mb-3 mb-3 leading-7 lg:leading-10">
          VA Access  <br />
Community Care
          </h2>
          <h5 ref={descriptionRef} className="figee text-[#625D57] lg:text-[1.1vw]">Veterans may qualify for IV  ketamine therapy through VA Community Care (VCCP) if it's not offered locally</h5>
          <h5 className="figee text-[#625D57] lg:text-[1.1vw] mt-5">The 2025 federal budget expansion supports non-VA access to approved treatments like IV ketamine. Klearmind assists veterans <br /> and providers with navigating the referral process for timely care.

</h5>
        
        </div>
        <div ref={circleRef} className="relative lg:mt-10 md:mt-10 flex items-center justify-center overflow-hidden">
          <div 
            className="circle relative w-20 lg:left-63 md:left-43 -mt-40 h-96 lg:w-[10vw] lg:h-[24vw] flex items-center justify-center"
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
                  className="lg:w-16 w-13  absolute"
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

export default CommunityCare;
