import React from 'react'
import blood from "../../assets/images/blood.png"
import Button from '../../Components/Button'
import useScrollAnimation from '../../hooks/useScrollAnimation'

const   IVInfusions = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const cardsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  
  const infusionCards = [
    {
      id: 1,
      title: "Myers' Cocktail Infusion",
      subtitle: "Comprehensive Nutrient Support",
      price: "$249",
      duration: "60 min",
      keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",      benefits: [
        "Boost Energy level",
        "Enhance function", 
        "Reduce fitness stress",
        "Supportive overlay"
      ]
    },
    {
      id: 2,
      title: "Basic Hydration Infusion",
      subtitle: "Rehydrate and Revitalize",
      price: "$149",
      duration: "45 min",
      keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",      benefits: [
        "Improved hydration",
        "Enhanced vitality",
        "Better nutrient absorption",
        "Reduced fatigue"
      ]
    },
    {
      id: 3,
      title: "KalmMind Infusion",
      subtitle: "Reduce Anxiety and Promote Calm",
      price: "$199",
      duration: "50 min",
      keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
      benefits: [
        "Reduced anxiety",
        "Better sleep quality",
        "Improved mood",
        "Enhanced relaxation"
      ]
    },
    {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
      {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
      {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
      {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
      {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
      {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
      {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
      {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
      {
        id: 3,
        title: "KalmMind Infusion",
        subtitle: "Reduce Anxiety and Promote Calm",
        price: "$199",
        duration: "50 min",
        keyIngredients: "Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents Magnesium, L-Theanine, B-Vitamins, Calming Agents",
        benefits: [
          "Reduced anxiety",
          "Better sleep quality",
          "Improved mood",
          "Enhanced relaxation"
        ]
      },
  ];

  return (
    <div className='h-full w-full grid grid-cols-1 lg:mt-30 mt-10 md:mt-25 lg:px-39'>
      <div className='h-full flex items-center justify-start flex-col gap-2'>
        <div ref={subtitleRef} className='flex items-center gap-2 justify-center'>
          <span className="w-2 h-2 rounded-full bg-orange-500"></span>
          <span className="figee lg:text-[1.7vh] md:text-[1.5vw]  text-gray-600 tracking-wide">
            Treatment Overview
          </span>
        </div>
        <h2 ref={titleRef} className='figee lg:text-4xl md:text-3xl text-3xl  text-[#32140C]'>IV Infusions</h2>
      </div> 

      <div ref={cardsRef} className='h-full mt-15 grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-6'>
        {infusionCards.map((card) => (
          <div key={card.id} className="group [perspective:1000px]">
            <div className="relative w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Face */}
              <div className="bg-[#FFFBF6] rounded-2xl grid grid-cols-1 [backface-visibility:hidden]">
                <div className=''>
                  <img
                    src={blood}
                    alt="Infusion"
                    className="p-27 object-contain"
                  />
                </div>
                <div className='h-full p-2'>
                  <h2 className='figee text-2xl font-[550] text-[#474241]'>{card.title}</h2>
                  <h3 className='figee text-[#474241] text-sm'>{card.subtitle}</h3>
                  <div className='flex items-center justify-between mt-3'>
                    <h2 className='figee text-[#474241]'><span className='text-2xl text-black'>{card.price}</span>/per treatment</h2>
                    <h3 className='text-[#474241]'>{card.duration}</h3>
                  </div>
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 bg-[#FFFBF6] rounded-2xl flex flex-col justify-start items-start [transform:rotateY(180deg)] [backface-visibility:hidden] p-2">
                <h2 className='figee text-2xl font-[550] text-[#474241]'>{card.title}</h2>
                <h3 className='figee text-[#474241] text-sm'>{card.subtitle}</h3>
                <div className='flex items-start justify-between mt-2'>
                  <h2 className='figee text-sm text-[#474241]'><span className='text-xl text-black'>{card.price}</span>/per treatment</h2>
                </div>

                <div className='w-full mt-6 figee text-[#474241]'>
                  <h3 className='text-[2vh]'>Key Ingredients</h3>
                  <h4 className='figee text-sm mt-3'>{card.keyIngredients}</h4>
                </div>

                <div className='w-full mt-4 figee pb-10 text-[#474241]'>
                  <h3 className='text-[2vh]'>Benefits</h3>
                  {card.benefits.map((benefit, index) => (
                    <h4 key={index} className='figee text-sm mt-1'>{benefit}</h4>
                  ))}
                </div>
                
                <Button  
                  btn="Book an appointment" 
                  bgcolor="#FD8124" 
                  textcolor="white" 
                  padding="lg:py-3 lg:px-25 md:py-3"
                  fontSize='lg:text-[0.8vw] md:text-2xl' 
                  border="border" 
                  hoverEffect={true}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IVInfusions