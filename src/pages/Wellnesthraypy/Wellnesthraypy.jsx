import React from 'react'
import Ketamine from '../../Components/Ketamine'
import sleep from "../../assets/images/sleep.png" 
import IVInfusions from './IVInfusions'
import VitaminIV from './VitaminIV'
import Ourmission from './Ourmission'
import Invest from './Invest'
import Testimonial from '../../Components/Testimonial'
import Faqs from '../../Components/Faqs.JSX'
import smiling from "../../assets/images/smiling.png"
import Loader from '../../Components/Loader'
const Wellnesthraypy = () => {
  return (
    <div className='w-full lg:py-33 py-20  relative'>

      <Loader/>
<Ketamine heading="Treatment Overview" text="What is Wellness Therapy?"  paragh={<>
  Biological wellness is about helping you feel your best. Our IV hydration and therapy <br /> support mood, energy, and recovery-whether you're run down, dehydrated, or just<br /> need a boost. Each infusion is tailored to your unique needs.

        
        </>} 
        
        image={sleep} />     
        <IVInfusions/> 
        <VitaminIV/> 
        <Ourmission/> 
        <Invest/> 
        <Testimonial img={smiling}/> 
     
        <div className='lg:mt-0 md:mt-12 '>
  <Faqs/>
</div>
    </div>
  )
}

export default Wellnesthraypy
