import React from "react";
import Ketamine from "./Ketamine";
import fact from "../assets/images/manandchild.png";
import therapyImg from "../assets/images/mankids.png";
import Lifedeserve from "./Lifedeserve";
import CommunityCare from "./CommunityCare";
import Therapy from "../pages/Ketaminetherapy/Therapy";
import VeteransResources from "./VeteransResources";
import ImpactinNumbers from "../pages/ketamineinfusion/ImpactinNumbers";
import StartGuide from "./StartGuide";
import Faqs from "./Faqs";
const Veteransaffair = () => {
    const stats = [
        {
          number: "39",
          text: (
            <>
              Veterans in a VA Ann Arbor study <br /> (n=215) saw significant symptom <br /> reduction in just 6 weeks

            </>
          ),
        },
        {
          number: "25+",
          text: (
            <>
              Showed ≥50% improvement, while <br /> 15% achieved full remission from their <br /> symptoms
            </>
          ),
        },
        {
          number: "100+",
          text: (
            <>
            Meta-analyses confirm IV ketamine <br /> provides reliable relief for PTSD, <br /> depression, and pain.
            </>
          ),
        },
      ];
  return (
    <div className=" w-full lg:py-33 py-24 ">
      <Ketamine
        customClass="text-[5vw] lg:text-4xl md:text-3xl"

        heading="Veterans"
        text={
          <>
            Understanding IV Ketamine <br /> Treatment for Veterans
          </>
        }
        paragh={
          <>
            IV ketamine is the gold standard in psychedelic assisted mental
            health therapy due to its- <br />
            Highest bioavailability (100%), precise and controlled dosing, rapid
            onset of therapeutic <br /> effects. Clinically backed efficacy for
            PTSD and depression conditions
          </>
        }
        image={fact}
      />
      <div className="lg:mt-30 mt-20 lg:px-0 px-4">
        <Lifedeserve
          imageSrc={therapyImg}
          classname="lg:px-8 lg:mt-0 mt-3 text-3xl  lg:text-4xl"
          heading={<>Is This Right for Me?</>}
          paragh={
            <>
              <p className="lg:mb-7 mb-3">
                Veterans in Sacramento and Northern California suffering from
                PTSD, treatment-resistant depression, chronic anxiety, or pain
                are finding new hope through IV ketamine therapy at Klearmind
                Clinics.
              </p>
              <p>
                Unlike oral or nasal options, IV ensures consistent results —
                especially crucial for veterans with severe or complex trauma
                histories.
              </p>
            </>
          }
        />
      </div>
      <CommunityCare/>
      <VeteransResources/>
      <ImpactinNumbers
      title="Impact in Numbers"
      subtitle={
        <>
       Research-Backed Outcomes

        </>
      }
      data={stats}
      dotColor="bg-orange-500" // optional
    /> 
    
    <div className="lg:mt-46">
 <StartGuide/>
    </div>


      <Therapy/>
      <Faqs/>
      
    </div>
  );
};

export default Veteransaffair;
