import React from 'react'
import Ketamine from '../../Components/Ketamine'
import fact from "../../assets/images/handtohand.png" 
import VitaminIV from '../Wellnesthraypy/VitaminIV'
import Lifedeserve from '../../Components/Lifedeserve'
import medicine from "../../assets/images/3dmedicine.png"
import Therapy from './Therapy'
import Psychotherapy from './Psychotherapy'
import Testimonial from '../../Components/Testimonial'
import testtonimals from "../../assets/images/testtonimals.png"
import Faqs from '../../Components/Faqs'

const Lap = () => {
  return (
    <div className=' w-full lg:py-33 py-30'>
          <Ketamine heading="Treatment Overview" text={<>
            What Is Ketamine Assisted <br /> Psychotherapy
            </>}
           paragh={<>
     KAP is mental health treatment method that involves using ketamine’s dis-associative dream <br /> like state and pain-relieving properties to help individuals work through various mental and <br /> emotional challenges with a licensed therapist. <br /> 
        
        </>} 
        
        image={fact} />

<VitaminIV/> 
<div className='mt-30'>
<Lifedeserve imageSrc={medicine} classname="figee text-center m-auto lg:text-4xl" heading={<>
    Our Pharmacies

  </>} paragh={<>
    We only work with compounding pharmacies that are 503B verified. The legal definition of a 503B outsourcing facility is: a facility at one geographic location or address that is engaged in the compounding of sterile drugs; has elected to register as an outsourcing facility; and complies with all of the requirements of section 503B.


  </>} />
</div>
<Therapy />
<Psychotherapy  />
<Testimonial img={testtonimals} />
<Faqs  />

</div>
  )
}

export default Lap
