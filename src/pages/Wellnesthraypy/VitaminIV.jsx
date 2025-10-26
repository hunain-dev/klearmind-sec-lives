import React from 'react'
import Button from '../../Components/Button'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const VitaminIV = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const descriptionRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  
  return (
    <div className=' w-full relative mt-30 px-3 lg:px-40 '>
     <div className='rounded-3xl grid lg:grid-cols-[60%_40%]  md:grid-cols-[60%_40%] grid-cols-1 justify-center h-full w-full bg-[#FDF9E9]'>
  <div className='h-full lg:p-4 lg:py-8 p-1 py-4 flex items-start justify-between flex-col'>
    <div className='w-full px-3'>
    <div ref={subtitleRef} className='flex items-center gap-2 justify-start '>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[1.7vh] md:text-[1.8vw]  text-[2vh] tracking-wide">
            Treatment Benefits
            </span>
            </div>
            
            <h3 ref={titleRef} className='figee lg:text-4xl text-3xl md:text-[3.5vw]  lg:mt-7 mt-5 text-[#32140C]'>The Power of Vitamin IV Therapy
            </h3>
    </div>

    <div className='w-full-400 lg:px-3 px-3 '>           
   
            <h4 ref={descriptionRef} className='figee lg:text-[2.3vh] md:text-[1.2vw]  text-[2.5vh] lg:pb-6 pb-5 lg:mt-8 mt-3 text-[#7D7871]'>
            IV Vitamin Therapy when compared to oral supplements does show significant effectiveness over the oral route which delivers superior and potent doses of <br /> nutrients that bypass your digestive system. FSA/HSA is accepted for all <br /> wellness treatments.

            </h4>
            <Button ref={buttonRef} btn="Learn more" padding="lg:py-3 py-2 lg:px-11 px-5" hoverEffect={false}/>
    </div>
  </div>
  <div className='lg:h-full  '>
    <img src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6838396f1e145a96c4f81eda_83cebfdb2c55cd5999898def9addedcb%201.avif" alt="" className='lg:h-[37vw]  md:h-[50vw]  object-cover' />
  </div>
</div>
    </div>
  )
}

export default VitaminIV
