import React from "react";
import oldman1 from "../assets/images/oldman1.png"
import oldman2 from "../assets/images/oldman2.png"
import oldman3 from "../assets/images/oldman3.png"
import Button from "./Button";
import useScrollAnimation from '../hooks/useScrollAnimation';
const cards = [
  {
    img: oldman1,
    title: "Resistance to Resilience: A Veteran’s Renewal with Ketamine",
    btnText: "Read the VA Article",
    to: "/https://marketplace.va.gov/innovations/from-resistance-to-resilience-a-veteran-s-renewal-with-ketamine",

  },
  {
    img: oldman2,
    title: "Eligibility Criteria for VA Covered Ketamine Treatment",
    btnText: "Download PDF",
    to: "/https://marketplace.va.gov/innovations/from-resistance-to-resilience-a-veteran-s-renewal-with-ketamine",

  },
  {
    img: oldman3,
    title: "VA Clinical Guidance on Ketamine for Neuropathic Pain",
    btnText: "Download PDF",
    to: "/https://marketplace.va.gov/innovations/from-resistance-to-resilience-a-veteran-s-renewal-with-ketamine",

  },
];

const VeteransResources = () => {
  // Animation refs
  const cardsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  
  return (
    <div className="w-full  lg:py-16 px-6 lg:px-40">
      <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#FBF6E8] rounded-3xl shadow-sm overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full lg:h-61 object-cover rounded-2xl"
            />
            <div className="p-2 flex  flex-col justify-between ">
              <h3 className="figee lg:mb-2 text-[#2B2A2A]  lg:text-[1.1vw] md:text-[1.3vw]  text-[4vw]">
                {card.title}
              </h3>
              <div className="w-fit mt-4">
                <Button
                  btn={card.btnText} // 👈 Dynamic button text from array
                  padding="lg:py-3 py-2 lg:px-6 px-6 md:px-4 md:py-2"
                  fontSize="md:text-[1.2vw] lg:text-[0.9vw] text-[2.4vw]"
                  border="border-gray-700"
                  hoverEffect={false}
                  to={card.to} // 👈 Dynamic link from array
                />
              </div>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VeteransResources;
