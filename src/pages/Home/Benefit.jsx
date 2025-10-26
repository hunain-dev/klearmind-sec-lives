import React from "react";
import Button from "../../Components/Button";
import VA from "../../assets/images/VA.png";
import useScrollAnimation from "../../hooks/useScrollAnimation";
const Benefit = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const buttonsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const imageRef = useScrollAnimation({ animationType: 'fadeInRight', delay: 200, duration: 0.8 })
  
  return (
    <div className=" w-full m-auto lg:mt-23 mt-9 p-10 lg:px-38 px-3">
      <div className="h-full  rounded-3xl grid lg:grid-cols-[62%_40%] md:grid-cols-2 grid-cols-1 overflow-hidden bg-[#F8EEEC] m-auto">
        <div className="h-full px-7 py-7">
          
          <h3 ref={subtitleRef} className="figee lg:text-[1.9vh] md:text-[1.8vw]  text-[3.3vw] lg:mb-5 mb-1">
            Benefit for Veterans Affairs
          </h3>
          <h2 ref={titleRef} className="figee lg:text-[2.3vw] text-[6.9vw] md:text-[3vw] lg:mb-12 mb-3 leading-8 lg:leading-10">
            VA-approved Community <br /> Care Provider
          </h2>
          <div ref={buttonsRef} className="lg:mt-5 mt-4 flex flex-col sm:flex-row items-start justify-start gap-3">
          <Button
              padding="lg:py-3 lg:px-4 px-3 py-3 md:px-5 md:py-3"
              bgcolor="#FD8124"
              textcolor="white"
              fontSize="lg:text-[0.9vw] md:text-[1.4vw] text-[3.2vw]"
              hoverEffect={false}
              mousehover="hover:bg-[#32140C]"
              border=""
              btn="Book an appointmnt"
              // to="https://calendly.com/admin-klearmindclinics/30min?month=2025-07"
            />
            <Button
              padding="lg:py-2 lg:px-6 px-3 py-3 md:px-7 md:py-3"
              bgcolor=""
              textcolor="black"
              fontSize="lg:text-[1vw] md:text-[1.4vw] text-[3.2vw]"
              to="/Veteransaffair"

              hoverEffect={false}
              border="border-black"
              btn="Learn more"
            />
          </div>
        </div>
        <div ref={imageRef} className="h-full lg:px-1 px-9 md:px-0  lg:py-0 py-2  flex items-center justify-end">
          <img src={VA} alt="" className="lg:h-[5.3vw] md:h-[9vw] h-[14vw] w-full lg:p-0   object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Benefit;
