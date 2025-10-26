import React from 'react'
import Button from '../../Components/Button'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const Invest = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const leftSubtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const leftTitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  const listRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 500, duration: 0.8 })
  const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 600, duration: 0.8 })
  
    const investamout  = [
        {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        },
        {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        },
        {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        }, {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        },
        {
            text:"Base IV Therapy",
            paragh:"Includes IV fluids only",
            amount:"$25"
        },

        
    ]
  return (
    <div className=' w-full lg:mt-20 mt-5 grid grid-cols-1 lg:px-40 md:mt-15'>
        <div className='h-full  flex items-center lg:justify-start  gap-4 flex-col'>
        <div ref={subtitleRef} className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.5vh] lg:text-[1.8vh] md:text-[1.8vw]  text-gray-600 tracking-wide">
            Affordable, Accessible Care

            </span>
            </div>
            <h2 ref={titleRef} className='fontspring lg:text-5xl text-3xl md:text-[4.3vw] text-[#32140C]'>Invest in Feeling Better
            </h2>
        </div>
        <div className=' lg:mt-15 mt-9  grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 rounded-3xl overflow-hidden'>
  {/* Left Side */}
  <div className='px-4  flex flex-col gap-1 '>
  <div ref={leftSubtitleRef} className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee text-[1.7vh]  md:text-[1.8vw]  text-gray-600 tracking-wide">
            Intramuscular


            </span>
            </div>
    <h1 ref={leftTitleRef} className='figee lg:text-4xl text-2xl  md:text-[3.3vw]   text-[#32140C]'>Wellness Injections</h1>



    <div ref={listRef} className='mt-6 p-3 lg:space-y-11 space-y-4 text-[#333]'>
    {
    investamout.map((elem,index)=>{
        return(
            <div key={index} className='figee flex justify-between border-b border-gray-300 pb-2'>
            <p>{elem.text}<br/><span className='text-gray-500 lg:text-sm text-[4vw]  md:text-[1.8vw]'>{elem.paragh}</span></p>
            <p className='figee lg:text-2xl text-[5.1vw] md:text-[3vw]'>{elem.amount}</p>
           
          </div>
          
        )
    })
 }
      <Button ref={buttonRef}
              btn="Book an appointment" 
              bgcolor="#FD8124" 
              textcolor="white" 
              padding="lg:py-3 md:py-3 py-3" 
              fontSize='lg:text-[1vw] md:text-[1.7vw] text-[3vw]'
              border="border" 
              hoverEffect={true}
            />
    </div>
  </div>

  {/* Right Side */}
  <div className='flex items-center justify-center overflow-hidden p-4  '>
    <img 
      src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/687a53f21a64e080ec87a222_asca%20(7).avif"
      alt="Injection"
      className='w-full h-full rounded-4xl object-contain'
    />
  </div>
</div>
      
    </div>
  )
}

export default Invest
