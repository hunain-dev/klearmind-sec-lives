import React from 'react'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const PopularTreatments = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const treatmentsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  
  const obj = [
    {
      image:
        "https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6870f3b9987d45a3477ef978_Frame%201410133546%20(1)-p-500.avif",
      text: "Ketamine IV Infusion",
      paragh: "Rapid relief for anxiety, depression, chronic pain, and PTSD.",
      link: "/Ketaminetherapy", // 👈 add your route here



    },
    {
        image:
          "https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6870f3b90b4a0fc895987957_Frame%201410133622-p-500.avif",
        text: "Wellness iv and injection",
        paragh: "Non-invasive brain stimulation for depression and anxiety treatment.",
        link: "/Wellnesthraypy", // 👈 add your route here

      },
  ]

  return (
    <div className="h-full lg:mt-30 mt-10 md:mt-20 w-full grid lg:grid-cols-1 ">
      {/* Heading */}
      <div className="h-full w-full flex items-center justify-start lg:gap-1 md:gap-2 flex-col">
        <h3 ref={subtitleRef} className="figee lg:text-[2vh] text-[3vw] md:text-[2vw]">Our Most Requested Treatments</h3>
        <h3 ref={titleRef} className="figee lg:text-[2.3vw] text-[6vw] md:text-[3.5vw] text-[#32140C]">Requested Treatments</h3>
      </div>

      {/* Treatments Grid */}
      <div ref={treatmentsRef} className="h-full w-full lg:px-40 px-9  lg:mt-9 mt-6 flex flex-col ">

        <div className='grid lg:grid-cols-2 md:grid-cols-2 items-center gap-4'>
        {obj.map((elem, index) => (
          <div key={index} className="">
            {/* Left: Image */}
            <div className="overflow-hidden rounded-3xl">
            <Link to={elem.link}>
                  <img
                    src={elem.image}
                    alt={elem.text}
                    className="lg:h-[27vw] md:h-[35vw] w-full object-cover rounded-4xl transition-transform duration-700 ease-in-out hover:scale-110"
                  />
                </Link>
  
  
   <img

  />
</div>

            {/* Right: Text/Paragraph */}
            <div className=" lg:px-6 md:px-10 text-center">
              <h2 className="figee lg:text-[1.8vw] md:text-[2vw] text-[5vw] py-3 text-[#413D3D]">{elem.text}</h2>
              <h4 className="figee lg:text-[1vw] md:text-[1.6vw] text-[4vw] text-[#9E9C9B]">{elem.paragh}</h4>
            </div>
          </div>
        ))}
        </div>
     
      </div>
    </div>
  )
}

export default PopularTreatments
