import React from 'react'
import Button from '../../Components/Button'
import Trustedcommuntiy from '../../Components/trustedcommuntiy'
import Faqs from '../../Components/Faqs'
import { Link } from 'react-router-dom'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const Blog = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const descriptionRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  const buttonsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 400, duration: 0.8 })
  const featuredRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 500, duration: 0.8 })
  const cardsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 600, duration: 0.8 })

    const cards = [
        {
            id:1,
            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/684fbd5bd8b5d76c37978e4f_Frame%201410133881%20(1).png",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        
        {
            id:2,
            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e59ab81fbf908d8c3293_Iron-Deficiency-Iron-Rich-Foods-Sacramento-Roseville.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:3,
            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881efc27dcbb6b7d10178b4_Ketamine-Treatment-Depression-Sacramento-Roseville-Klearmind.jpg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:4,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e599be9a167c4bb17037_Methylene-Blue-IV-Drip-Sacramento-Roseville.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:5,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5993bbe2a9f43b509f7_iv-infusion-therapy-and-how-it-works.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        }, 
        
        {
            id:6,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5991d9356f2a04ef33d_vitamin-c-and-cancer-therapy.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },





        {
            id:7,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e598e3299dda80a89159_IV-Ketamine-Infusion-Therapy-Sacramento.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:8,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5988ffd10b0c87df0f2_Benefits-of-Ketamine-for-Postpartum-Depression.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
           {
            id:9,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5976e2d4c35fc6d5621_Ketamine-Therapy-A-Proven-Medication.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:10,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e598919cb9e9a8a6e159_Oral-Ketamine-Sacramento-Roseville-Clinic.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:11,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e598129851ce72cc5ec8_How-To-Use-Intranasal-Esketamine-Spravato.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
           {
            id:12,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e599a69e3e2c3ae082b6_Intravenous-NAD.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },






        {
            id:13,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5975d1107e3a3a4ebf3_Benefits-of-Ketamine-Therapy.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:14,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e59763fb663bb0f82f99_Zofran-Morning-Sickness-Roseville-Sacramento.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:15,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e599b6a9779f0570256a_IV-Ketamine-for-Complex-Regional-Pain-Syndrome-CRPS.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:16,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e593cebeddbb66f234a7_Ketamine-Uses-Risks-and-Regulations-Ketamine-Therapy-Sacramento.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:17,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e597bf8ceaedea4772bc_IV-Drip-Therapy-How-Does-It-Work-and-What-Does-It-Do.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:18,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e595179e051f159be781_What-Are-The-Benefits-of-the-Myers-Cocktail.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },





        {
            id:19,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5957ce77dc573b30c3d_IV-Vitamin-Therapy-in-Roseville.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:20,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e597129851ce72cc5e41_Is-Nausea-A-Symptom-of-Dehydration.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },



        {
            id:21,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5966aa0011a7184ecc6_Benefits-of-IV-Hydration-Therapy.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:22,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5998d0ee7cdfc96b45b_IV-Drip-for-Pregnancy.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },   {
            id:23,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e595a8d9ec8a848ea5a0_Geriatric-Depression-Treatment.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:24,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5954e3f98e9d3014154_Ketamin-IV-Infusion-Therapy-vs-ECT.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:25,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5953ce5dd8c72205adc_Ketamine-Therapy-for-Alcoholism.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:26,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5943982c33c631d8273_Benefits-of-Ketamine-Therapy-for-Chronic-Pain.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:27,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e595d485dfb8fe300055_Depression-in-Men-How-to-Treat.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:28,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e594d9aead3de6b159df_myths-about-ketamine-therapy.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:29,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e594780b2009050728c2_How-NAD-May-Detect-Cardiac-Deterioration.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:30,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5940de5776cab72b06e_IV-vs-IM-Ketamine-Exploring-Bioavailability-and-Efficacy-in-Depression-Treatment.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:31,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e59448dc4275145e939a_NAD-and-Ketamine-Promising-Treatments-for-Depression.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:32,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e593cebeddbb66f234a7_Ketamine-Uses-Risks-and-Regulations-Ketamine-Therapy-Sacramento.webp",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        {
            id:33,

            img:"https://cdn.prod.website-files.com/6847c7ed0378f7303debb843/6881e5967c0f7841e6164c8b_unsplash_523ae1f5502d6_1-scaled-1.jpeg",
            text:"Ketamine Therapy: A Proven Medication with A New Purpose",
            date:"june , 2025",
            things:"ketamine"
        },
        
    ]
  return (
    <div className=' w-full py-25  lg:py-30'>
        <div ref={subtitleRef} className=' w-full  flex items-center text-center justify-start flex-col'>
        <div className='flex items-center gap-2 justify-center'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] md:text-[2vw] text-[3.3vw] text-gray-600 tracking-wide">
            Blog
            </span>
            </div>
            <h2 ref={titleRef} className='fontspring lg:text-5xl text-3xl text-[#32140C] mt-2'>KlearMind Blogs: Insights <br /> for Healing</h2>
            <h5 ref={descriptionRef} className='figee lg:text-sm text-[2.5vw] md:text-[1.6vw] lg:mt-4 mt-3'>Stay informed on the latest in ketamine therapy, mental health innovations, and self <br />-care guidance—all in one place.</h5>
        </div>

        <div className=' w-full lg:mt-20 mt-10 lg:px-40'> 

            <div className='  w-full overflow-hidden '>
               <div ref={buttonsRef} className=" flex items-start justify-start lg:ap-4 w-full ">
               <Button 
              btn="All" 
              padding="lg:py-1 py-3 lg:px-8 px-5 md:px-5 md:py-3   " 
              fontSize='md:text-[1.4vw] lg:text-[1.1vw] text-[4vw]'

              border="border-none" 
              hoverEffect={false}
              bgcolor="#FFF8E6"
              to=""
              
            />

<Button 
              btn="Wellness" 
            padding="lg:py-1 py-3 lg:px-8 px-5 md:px-5 md:py-3   " 
              fontSize='md:text-[1.4vw] lg:text-[1.1vw] text-[4vw]'

              border="border-none" 
              hoverEffect={false}
              bgcolor="#FFF8E6"

              to=""
              
            />
                   <Button 
              btn="Ketamine" 
       padding="lg:py-1 py-3 lg:px-8 px-5 md:px-5 md:py-3   " 
              fontSize='md:text-[1.4vw] lg:text-[1.1vw] text-[4vw]'

              border="border-none" 
              hoverEffect={false}
              bgcolor="#FFF8E6"

              to=""
              
            />
                </div> 
                <div ref={featuredRef} className=' grid lg:grid-cols-[58%_43%] md:grid-cols-[58%_43%] grid-cols-1 md:grid-cols-2 lg:px-0 px-4   mt-5 overflow-hidden lg:rounded-4xl bg-[#FDF9E9]'>
  <div className='h-full '>
    <img src="https://cdn.prod.website-files.com/68235d19001da11fe701c90e/6846c389a78f3e9225c3f512_Frame%201410133881.avif" className='lg:h-105 md:h-80 h-60  rounded-2xl w-full object-cover' alt="" />
  </div>
  <div className='h-full  lg:px-3 lg:py-4 lg:mt-0 mt-1  flex items-start flex-col justify-between'>
    <h4 className='figee text-[#423D39] lg:text-2xl lg:px-0 md:px-2  md:text-[1.7vw] text-[3.5vw]'>This is some text inside of a div block</h4>
    <div className='flex  w-full lg:gap-4 gap-3 items-start justify-start'>
    <h3 className='figee bg-[#FFE7B1] text-[#423D39] lg:text-[0.8vw]  md:text-[1.3vw]  text-[2.3vw] p-2  rounded-3xl lg:p-3'>
    this is some text inside of div <br /> block
  </h3>

  <h3 className='figee bg-[#FFE7B1] text-[#423D39] lg:text-[0.8vw] md:text-[1.3vw]  text-[2.3vw] p-2  rounded-3xl lg:p-3'>
  this is another text inside of div <br />     block
  </h3>
</div>


  </div>
</div>

            </div>
        </div>

        <div ref={cardsRef} className=' grid lg:grid-cols-3 md:grid-cols-3  w-full mt-5 gap-6 px-3 lg:px-40'>

            {
                cards.map((elem,index)=>{
                    return(
<Link key={index} to={`/BlogDetails/${elem.id}`}>
                                  <div key={index} className="bg-[#FFF7E8] rounded-2xl shadow-sm overflow-hidden  cursor-pointer transition-all duration-300 hover:-translate-y-2">
                        {/* Image */}
                        <div className="overflow-hidden">
                          <img
                            src={elem.img}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        </div>
                  
                        {/* Content */}
                        <div className="p-5 flex items-start lg:gap-10 gap-4 justify-between flex-col">
                          <h3 className="text-[#2E2E2E] lg:text-sm text-[4vw] md:text-sm figee  mb-4">
                           {elem.text}
                          </h3>
                  
                          {/* Date + Tag */}
                          <div className="flex items-center gap-3">
                            <span className="figee lg:text-sm md:text-sm text-[4vw] bg-[#FCE9C2] px-3 py-1 rounded-full text-[#4B4B4B]">
                              {elem.date}
                            </span>
                            <span className="lg:text-sm md:text-sm  text-[4vw] bg-[#FCE9C2] px-3 py-1 rounded-full text-[#4B4B4B]">
                              {elem.things}
                            </span>
                          </div>
                        </div>
                      </div>
                        </Link>
              
                  
                    )
                })
            }

      


   

        </div>
      
      <Trustedcommuntiy/>
      <Faqs/>
    </div>
  )
}

export default Blog
