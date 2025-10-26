  import React from 'react'
  import HomeLanding from './HomeLanding'
  import Therapydelivered from './therapydelivered'
  import Klearmind from '../../Components/klearmind'
  import Journey from './Journey'
  import Benefit from './Benefit'
  import Testimonial from '../../Components/Testimonial'
  import Neuroplasticity from './Neuroplasticity'
  import PopularTreatments from './PopularTreatments'
  import OurApproach from './OurApproach'
  import Trustedcommunity from "../../Components/trustedcommuntiy"
  import Faqs from '../../Components/Faqs.JSX'
  import testtonimals from "../../assets/images/testtonimals.png"
  import Loader from '../../Components/Loader'

  const Home = () => {
    return (
      <div  >
        <Loader/>
        <HomeLanding    />
        <Therapydelivered/>
      <Klearmind/>
        <Journey/>
        <Benefit/>
        <Testimonial  img={testtonimals}  />
        <Neuroplasticity/>
        <PopularTreatments/>
        <OurApproach/>
        <Trustedcommunity/>
        <Faqs/>
      
      
      </div>
    )
  }

  export default Home
