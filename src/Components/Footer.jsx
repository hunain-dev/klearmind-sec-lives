import React from "react";
import Button from "./Button";
import rose from "../assets/images/Rose.png";
import riseup from "../assets/Video/riseup.mp4"
import klearlogo from "../assets/images/Klearlogo.svg"
import useScrollAnimation from '../hooks/useScrollAnimation';
const Footer = () => {
  // Animation refs
  const consultationSubtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const consultationTitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const consultationButtonsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const footerLinksRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  const footerLocationRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 500, duration: 0.8 })
  const footerVideoRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 600, duration: 0.8 })
  
  return (
    <div className="h-full w-full bg-black lg:mt-70 mt-55 md:mt-50 ">
      <div className="front scdulecard lg:min-w-[57%] min-w-[90%] md:min-w-[75%]  bg-[#FDF9E9]  absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl -mt-23 grid lg:grid-cols-[60%_41%] md:grid-cols-[60%_41%] overflow-hidden">
        <div className="h-full  flex items-center justify-between flex-col">
          <div className="w-full  p-5 ">
            <div ref={consultationSubtitleRef} className="flex items-center gap-2 justify-start  pb-2">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="figee lg:text-[1.7vh] md:text-[1.3vw] text-gray-600 tracking-wide">
                Schedule a Consultation
              </span>
            </div>{" "}
            <h2 ref={consultationTitleRef} className="fontspring text-[#32140C] text-3xl  lg:text-[3.4vw] md:text-4xl lg:leading-none font-[500]">
              We re here to listen, <br /> not just to treat
            </h2>
          </div>
          <div className="w-full lg:p-5 p-2 ">
          <div ref={consultationButtonsRef} className="flex flex-col sm:flex-row gap-2 mt-1">
          <Button
                btn="book an appointment"
                fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'
                padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3" 
                bgcolor="#FD8124"
                textcolor="white"
                border="border-none"
                to="https://calendly.com/klearmindclinics"
              />
              <Button
                btn="Am i a candidate"
                 padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3   " 
              fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw]'
                hoverEffect={false}
                textcolor="black"
                border="border border-black"
                to="https://calendly.com/admin-klearmindclinics/30min?month=2025-07"
              />
            </div>
          </div>
        </div>
        <div className="h-full  flex items-center justify-center">
          <img src={rose} alt="" className="lg:h-[58vh] md:h-[30vh] xl:h-[52vh]   h-[38vh] p-4 lg:p-6  object-cover  " />
        </div>
      </div>

      <footer className="w-full bg-[#F8EEEC] lg:px-40">
        <div className=" w-full  grid grid-cols-1 ">
          <div ref={footerLinksRef} className="h-full  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:p-0 p-3 md:mt-30  lg:mt-35 mt-55 ">
          <div className="h-full flex flex-col items-center md:flex-row md:items-start  lg:flex-row lg:items-start justify-start gap-4">
          <div className="figee lg:text-[2vh] text-2xl md:text-[2.3vw] text-[5vw]  lg:gap-1 gap-2 flex lg:items-start items-center    flex-col text-[#563B35] ">
                <h2>Quick Links</h2>
                <h4>Home</h4>
                <h4>About us</h4>
                <h4>Treatments</h4>
                <h4>pricing</h4>
              </div>
              <div className="figee lg:text-[2vh] text-[5vw]  md:text-[2.3vw]  gap-1 flex lg:items-start items-center   flex-col text-[#563B35] ">
                <h2>Support</h2>
                <h4>Blog</h4>
            
              </div>

              <div className="figee lg:text-[2vh] text-[5vw]  md:text-[2.3vw]  gap-1 flex lg:items-start items-center   flex-col text-[#563B35] ">
              <h2>Treatments</h2>

                <h4>Ketarmine therapy</h4>
                <h4>wellness therpy</h4>
              </div>
              
              </div>
              <div ref={footerLocationRef} className="lg:h-full lg:w-full   md:items-start flex flex-col md:flex-row lg:flex-row lg:items-start justify-start items-center lg:gap-0 gap-6">
              <div className="lg:w-2xl md:w-2xl figee lg:text-[2vh] text-[5vw] gap-1 flex lg:items-start items-center md:text-[1.7vw]  flex-col text-[#563B35] ">
                <h2>Location</h2>
                <h4>1249 Pleasant Grove Blvd <br />
                #100, Roseville, CA 95678</h4>
                <h4 className="text-center lg:text-left">Contact Information <br />
                916-900-6686</h4>
              </div>
             
              <div className="figee lg:text-[2vh] md:text-[1.6vw] text-[4vw] md:items-start  gap-1 flex lg:items-start items-center   flex-col text-[#563B35] ">
                <h2>Open Payments Database
                </h2>
                <h4>For informational purposes only, a link to the federal Centers for Medicare and Medicaid Services (CMS) Open Payments web page is provided here.


                </h4>
                <h4>Read more
                </h4>
              </div>
         
              
              </div>        
              
                </div>
          <div ref={footerVideoRef} className="lg:h-[64vh] h-[25vh] md:h-[23vh]  w-full lg:mt-10 mt-25 bg-black lg:overflow-hidden" >
            <div className="relative h-full  rounded-2xl">
                 <video src={riseup} autoPlay loop muted className="h-full w-full object-cover"></video>

              <div className="absolute top-0 left-0 h-full flex items-end justify-end w-full rounded-2xl ">
                <img src={klearlogo} alt="" />
              </div>
              </div> 
        
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
