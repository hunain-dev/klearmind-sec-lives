import React from 'react'
import KetamineinfusionLanding from '../ketamineinfusion/KetamineinfusionLanding'
import Faqs from '../../Components/Faqs'
import TreatmentComparison from '../../Components/TreatmentComparison'

const Treatmentmodalities = () => {
  return (
    <div className=' w-full py-38'>
        <div  className=' lg:px-40'>
        <KetamineinfusionLanding/>
        </div>
        <div className='lg:px-20 lg:mt-18'>
        <TreatmentComparison/>

        </div>

              <Faqs/>
              

    </div>
  )
}

export default Treatmentmodalities
