import React from 'react'
import Button from '../../Components/Button'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const FormsofTreatment = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const descriptionRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const buttonRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  const treatmentsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 500, duration: 0.8 })
  
    const treatment = [
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/687108bdf414ecccaa6cc031_Frame%201410133861%20(1).avif",
            text:"IV Infusions",
        },
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/687108bd8688c481f8a668d9_Frame%201410133862.avif",
            text:"Intramuscular ",

        },
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/687108bd386d865e0c9b3d60_Frame%201410133863.avif",
            text:"Nasal ",


        },
        {
            innerimg:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/683eb83a9fb9df7be8ab45ac_Frame%201410133939.avif",
            text:"Oral ",

            
            
            
        }
    ]
  return (
    <div className='     w-full grid mt-20 grid-cols-1 lg:px-40'>
        <div className='h-full grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2
        '>
            <div className='h-full lg:p-0 p-2'>
            <div ref={subtitleRef} className='flex items-center gap-2 justify-start'>
            <span className="w-2 h-2 rounded-full bg-amber-700 "></span>
            <span className="figee lg:text-[1.7vh] md:text-[1.4vw] text-[3.3vw]  text-gray-600 tracking-wide">
            Award-Winning Care, Year After Year
            </span>
            </div>
            <h2 ref={titleRef} className='figee lg:text-4xl text-[6.9vw] lg:mt-2 md:text-[3.6vw] text-[#32140C]' >Forms of Treatment     
                       </h2>
            </div>
            <div ref={descriptionRef} className='h-full lg:p-0 p-2  flex items-start lg:px-10 justify-start gap-4 flex-col'>
                <h3 className='figee text-[#63605F] lg:text-sm text-[4.3vw] md:text-[1.4vw]'>There are 4 methods to deliver Ketamine treatments.</h3>
                <Button ref={buttonRef} btn="Learn more" padding="lg:py-3 lg:px-8 py-2"  fontSize='lg:text-1xl md:text-sm'  hoverEffect={false} textcolor="black" border="border border-black" to="/Treatmentmodalities"/>
            </div>
        </div>
        <div ref={treatmentsRef} className='lg:mt-7 mt-3 grid lg:grid-cols-4  grid-cols-2 md:grid-cols-4 gap-5 p-5'>
            {
                treatment.map((elem,index)=>{
                    return(
                        <div key={index} className='g-full overflow-hidden ' style={{backgroundColor:elem.bgcolor}} >
                        <div className='w-full ' style={{backgroundColor:elem.innercolor}}>
                            <img src={elem.innerimg} className='h-full  rounded-2xl  w-full object-cover' alt="" />
                        </div>
                        <h3 className='figee lg:text-[1.5vw]  md:text-[2.2vw] text-[4vw] mt-2'>{elem.text}</h3>
                    </div>
                    )
                })
            }
          
        </div>
      
    </div>
  )
}

export default FormsofTreatment
