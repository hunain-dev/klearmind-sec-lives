import React from "react";
import { Check, Clock } from "lucide-react";
import Button from "../../Components/Button";
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Ourplan = () => {
  // Animation refs
  const plansRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  
  const plans = [
    {
      title: "IV Ketamine Psychotherapy",
      subtitle: "Most Mood and Psychiatric Disorders",
      price: "$550",
      duration: "60 Mins",
      features: [
        "Personalized Ketamine Protocol",
        "Ketamine Treatment Guide and Workbook",
        "Infusion Duration 45 Mins",
        "Recovery Time 20 Mins",
        "Supplemental Medication As needed",
        "Prepay Options $3100 for 6 treatments",
      ],
      description:
      "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
    },
    {
      title: "Wellness Therapy",
      subtitle: "Mental & Physical Relaxation",
      price: "$350",
      duration: "45 Mins",
      features: [
        "Personalized Ketamine Protocol",
        "Ketamine Treatment Guide and Workbook",
        "Infusion Duration 45 Mins",
        "Recovery Time 20 Mins",
        "Supplemental Medication As needed",
        "Prepay Options $3100 for 6 treatments",
      ],
      description:
      "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
    },
    {
      title: "Ketamine Infusion Plus",
      subtitle: "Advanced Mental Recovery",
      price: "$650",
      duration: "75 Mins",
      features: [
        "Personalized Ketamine Protocol",
        "Ketamine Treatment Guide and Workbook",
        "Infusion Duration 45 Mins",
        "Recovery Time 20 Mins",
        "Supplemental Medication As needed",
        "Prepay Options $3100 for 6 treatments",
      ],
      description:
      "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
  },
  {
    title: "Ketamine Infusion Plus",
    subtitle: "Advanced Mental Recovery",
    price: "$650",
    duration: "75 Mins",
    features: [
      "Personalized Ketamine Protocol",
      "Ketamine Treatment Guide and Workbook",
      "Infusion Duration 45 Mins",
      "Recovery Time 20 Mins",
      "Supplemental Medication As needed",
      "Prepay Options $3100 for 6 treatments",
    ],
    description:
    "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
{
  title: "Ketamine Infusion Plus",
  subtitle: "Advanced Mental Recovery",
  price: "$650",
  duration: "75 Mins",
  features: [
    "Personalized Ketamine Protocol",
    "Ketamine Treatment Guide and Workbook",
    "Infusion Duration 45 Mins",
    "Recovery Time 20 Mins",
    "Supplemental Medication As needed",
    "Prepay Options $3100 for 6 treatments",
  ],
  description:
  "Wellness Therapy designed to improve overall balance, stress relief, and mental clarity using modern healing techniques.",
},
  ];

  return (
    <div ref={plansRef} className="w-full grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:px-0 px-3 gap-5 lg:mt-20 mt-13 lg:mb-40 mb-27 ">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-[#FFFBF6] rounded-2xl p-4 shadow-sm border border-gray-200"
        >
          {/* Title */}
          <div className="mb-2">
            <h2 className="figee lg:text-2xl md:text-[2vw] text-[#32140C] mb-1">
              {plan.title}
            </h2>
            <p className="figee lg:text-sm  md:text-[1vw] text-gray-700">{plan.subtitle}</p>
          </div>

          {/* Pricing Section */}
          <div className="flex items-start justify-between mb-15">
            <div>
              <span className="figee lg:text-2xl md:text-[2vw] text-[#32140C]">
                {plan.price}
              </span>
              <span className="text-gray-500 text-sm"> / per treatment</span>
            </div>
            <div className="flex items-center text-gray-600">
              <span className="text-sm">{plan.duration}</span>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-5 mb-5 figee lg:text-[2vh]">
            {plan.features.map((feature, i) => (
              <div key={i} className="flex items-start">
                <span className="text-gray-700 md:text-[1.3vw]">{feature}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="lg:text-[1.8vh] md:text-[1.3vw] text-gray-600 mb-6 leading-relaxed">
            {plan.description}
          </p>

          {/* Button */}
          <Button
            btn="Schedule a consultation"
            padding="lg:py-3 py-3 lg:px-6 px-11 md:px-5 md:py-3   " 
            fontSize='md:text-[1.4vw] lg:text-[1vw] text-[3.2vw] ' to="https://calendly.com/admin-klearmindclinics/30min"            hoverEffect={false}
          />
        </div>
      ))}
    </div>
  );
};

export default Ourplan;
