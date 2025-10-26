import React from "react";
import useScrollAnimation from '../hooks/useScrollAnimation';

const TreatmentComparison = () => {
  // Animation refs
  const subtitleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 100, duration: 0.8 })
  const titleRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 200, duration: 0.8 })
  const cardsRef = useScrollAnimation({ animationType: 'fadeInUp', delay: 300, duration: 0.8 })
  
  const data = [
    {
      img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68806bfa67a8c74d0ad9b63e_XMLID_1447_.svg",
      title: "Intravenous",
      bio: "100% Bioavailability",
      pros: [
        "Rapid onset",
        "Delivers highest possible efficacy",
        "Precise dosing",
      ],
      cons: ["Requires medical staff supervision"],
      clinical: [
        "Treats severe depressive episodes",
        "All studies based on IV and has best track record",
      ],
    },
    {
        img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68806bfa79031c22455c8ed5_fi_3557421.svg",
        title: "Intramuscular",
      bio: "75% Bioavailability",
      pros: [
        "Intermediate onset",
        "Intermediate efficacy",
        "Simple needle-based method",
      ],
      cons: [
        "Requires medical staff supervision",
        "Absorption is variable; higher dosing needed for efficacy",
      ],
      clinical: ["Treats severe depressive episodes"],
    },
    {
        img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68806bfa2c5768e4a198e62a_Group.svg",
        title: "Nasal",
      bio: "50% Bioavailability",
      pros: ["Slower onset", "Lowest efficacy"],
      cons: [
        "Slower onset",
        "Capped max dosage increased cost",
        "Variable insurance coverage",
      ],
      clinical: ["Outpatient therapy (e.g. esketamine/Spravato)"],
    },
    {
        img:"https://cdn.prod.website-files.com/68235d19001da11fe701c90e/68806bfa801bc48cf5c2ae84_XMLID_488_.svg",
        title: "Oral/Sublingual",
      bio: "25% Bioavailability",
      pros: ["Least invasive", "Most affordable"],
      cons: [
        "Slower onset",
        "Lower efficacy",
        "Highest dosing needed for efficacy",
      ],
      clinical: [
        "Can be used with therapy and bridge with IV to increase time between infusions",
      ],
    },
  ];

  return (
    <div className="w-full md:px-20 px-5   py-16 bg-[#FFFDF9]">
          <div ref={subtitleRef} className='flex items-center gap-2 justify-center lg:mb-3'>
            <span className="w-2 h-2 rounded-full bg-orange-500 "></span>
            <span className="figee lg:text-[2vh] md:text-[3vw] text-gray-600 tracking-wide">
            Care Options

            </span>
            </div>
      <h2 ref={titleRef} className="figee text-center text-[#32140C] lg:text-4xl md:text-3xl text-2xl mb-10">
        Types of Ketamine: A Comparison
      </h2>

      <div ref={cardsRef} className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl shadow-sm bg-[#FFFBF6] p-6 flex flex-col gap-3 hover:shadow-lg transition-all duration-300"
          >
            {/* Header */}
            <div className="flex flex-col items-center justify-center mb-3">
              <span className="text-3xl mb-1">
                <img src={item.img} className="h-9" alt="" />
              </span>
              <h3 className="figee text-[#32140C]  text-lg lg:text-xl">
                {item.title}
              </h3>
              <p className="text-[#FD852B] figee text-sm">
                {item.bio}
              </p>
            </div>

            {/* Pros */}
            <div>
              <h4 className="#FD852B text-[#32140C] text-[0.8vw]">Pros</h4>
              <div>
              {item.pros.map((pro, i) => (
                  <h4 key={i} className="text-[0.9vw] text-[#8D8986]">{pro}</h4>
                ))}
              </div>
            </div>

            {/* Cons */}
            <div>
            <h4 className="#FD852B text-[#32140C] text-[0.8vw]">Cons</h4>
            <div>
              {item.pros.map((con, i) => (
                  <h4 key={i} className="text-[0.9vw] text-[#8D8986]">{con}</h4>
                ))}
              </div>
            </div>

            {/* Clinical Use */}
            <div>
              <h4 className="#FD852B text-[#32140C] mt-8 text-[0.8vw]">
                Clinical Use
              </h4>
              <div className="text-gray-600 text-sm mt-1 list-disc list-inside">
                {item.clinical.map((use, i) => (
                  <h4 key={i} className="text-[0.9vw] text-[#8D8986]">{use}</h4>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TreatmentComparison;
