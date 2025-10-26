import React from "react";
import { useParams } from "react-router-dom";
import Ketamine from "./Ketamine";
import fact1 from "../assets/images/ourdetails.jpeg";
import fact3 from "../assets/images/fact.png";

const KlearmindDetail = () => {
  const { id } = useParams();

  const data = [
    {
      id: 1,
      title: "What Is IV Ketamine Infusion Therapy??",
      
      image: fact1,
    },
    {
      id: 2,
      title: "Feeling hopeless?",
 
      image: "http://localhost:5175/src/assets/images/sleep.png",
    },
    {
      id: 3,
      title:(
        <>
        Exploring the Benefits of Ketamine <br /> Therapy  for Chronic Pain Management
        </> ),
   
      image: fact3,
    },
  ];

  const clientdetails = [
    {
      id: 1,
      content: [
        {
          heading: "What Is IV Ketamine Infusion Therapy?",
          paragraphs: [
            "IV Ketamine therapy is a treatment that uses low doses of ketamine, a dissociative anesthetic medication, to manage various mental health conditions. Examples include anxiety, treatment-resistant depression, obsessive compulsive disorder (OCD), and post-traumatic stress disorder (PTSD).",
            "In the hospital operating room, ketamine is approved for use as an anesthetic at high doses. Lower dose “sub-anesthetic” ketamine injections are used “off-label” to treat anxiety, depression, pain, and other mental health conditions.",
            "Recently, many factors contribute to the increase in mental health ailments across various backgrounds. Currently, there are many medications that are prescribed by physicians and psychiatrists to treat anxiety, depression, OCD, PTSD, pain, and even some substance use disorders.",
          ],
        },
        {
          heading: "What is ketamine?",
          paragraphs: [
            "Ketamine is a general anesthetic widely used in operating rooms since the 1960s. In the 1990s, it was Yale researchers who first demonstrated that a low-dose intravenous (IV) infusion of ketamine had rapid and significant antidepressant effects.",
            "In the following decades, more research has been complete to demonstrate the efficacy of ketamine infusion therapy in helping patients find relief from depression as well as other chronic mental health conditions."
          ],
        },
        {
          heading: "What does ketamine treat?",
          paragraphs: [
            "Ketamine infusion therapy is primarily used to treat people suffering from major depressive disorder (MDD) and treatment-resistant depression (TRD).",
            "A few leading statistics on ketamine research include:",
            "Clinical studies show that ketamine infusion therapy can effectively treat MDD and treatment-resistant depression TRD with a success rate as high as 70%. Most patients show a dramatic improvement after only one or two infusions. 70% of patients with suicidal ideation report no longer having suicidal thoughts within a few days of treatment",
            "Ketamine has also been proven to be effective in treating other mental health conditions. It can help treat anxiety disorders, obsessive-compulsive disorder (OCD), and PTSD"

          ],
        },

        {
          heading: "How does ketamine treatment work?",
          paragraphs: [
            "Ketamine works differently than antidepressants, which can take weeks to months to produce results. Traditional antidepressants, known as selective serotonin reuptake inhibitors (SSRIs), focus on regulating serotonin hormone levels. Ketamine is unique. It acts on NMDA (N-methyl-D-aspartate) receptors and increases glutamate levels. Glutamate is one of the brain’s most powerful chemical messengers..",
            "Increasing glutamate helps to strengthen and restore the neural connections and pathways in the areas of the brain most impaired by depression.",
            "So this is what supports our brain's neuroplasticity. As a result, we experience positive changes in brain circuit function and improved mood regulation.",
            "Given in low doses, ketamine infusion therapy can produce rapid and significant improvement in symptoms, often within a few hours to days. Compared to antidepressants, increasing your glutamate levels with ketamine yields a greater and more substantial impact on brain cells with only one single dose."

          ],
        },

        {
          heading: "What is a ketamine therapy session like?",
          paragraphs: [
            "Ketamine infusion must always be administered by specially trained medical personnel in a certified clinical setting because it is given intravenously and is considered a controlled substance. Most patients receive it as an outpatient and are able to go home within a couple of hours.",
            "At KlearMind Ketamine & IV Hydration Clinics, we offer ketamine infusion therapy in all modalities in Sacramento, Roseville, and surrounding areas. The infusion process generally lasts 40 minutes. Including monitoring, journaling and integrating, the entire session takes about an hour and a half to two hours.",
          
          ],
        },

        {
          heading: "What does ketamine therapy actually feel like?",
          paragraphs: [
            "At the beginning of the session, we will seat you in a comfortable chair with blankets if needed. Once you’re settled in your chair, your team at KlearMind will let you know when the IV has begun. Patients report a calm and relaxing feeling. As the treatment progresses, you might feel increasingly light or faint. Some patients report feeling like they are floating.",
            "Some individuals experience a sensation of a slight separation between themselves and their bodies. For some, your hands and feet may feel very far away. Others progressively feel more separation between themselves and the different parts of consciousness. For example, their thoughts, feelings, bodily sensations, and perception all seem like separate experiences. For reference, these sensations are considered to be the dissociative effects of ketamine.",
          
          ],
        },


        
        {
          heading: "How do patients handle these sensations?",
          paragraphs: [
            "Patients generally tolerate these sensations well, reporting the experience as pleasant or profound or spiritual During these sensations, someone struggling with anxiety, depression, or rumination will feel much less of these symptoms. Some may even feel distant from those negative symptoms.",
            "In rare instances, patients may have a negative experience. We have psychiatric professionals on-site constantly monitoring your session to help manage these rare cases. The event is usually brief and goes away completely within 10-15 minutes after stopping the infusion treatment.",
          
          ],
        },

        {
          heading: "What is the typical ketamine treatment?",
          paragraphs: [
            "KlearMind Ketamine & IV Hydration Clinics recommends 6 ketamine infusion therapy sessions. 6 ketamine treatments for three-4 weeks. The average is 1-2 treatments per week. Your clinician will review this with you during your initial consultation.",
            "If you respond well and your symptoms are successfully controlled following this initial course of treatment, your provider will schedule follow-up sessions. During these sessions, you will work with your clinician to determine long-term treatment plans as needed. If a primary care provider believes a patient may benefit from maintenance treatments, then you may have an infusion every two to four weeks after the initial 6 doses.",
          
          ],
        },

        {
          heading: "What are the side effects of ketamine therapy?",
          paragraphs: [
            "Side effects range from each individual. The side effects usually only last during the treatment session. While you may not experience any side effects, the most common side effect of IV ketamine infusion therapy include:",
            "Disassociation Double vision Dream-like state Elevated blood pressure Elevated heart rate Feeling strange or loopy Loss of appetite Nausea Slight pain where injected Trouble speaking",
          
          ],
        },


        {
          heading: "Where can I get ketamine treatments in Sacramento or Roseville?",
          paragraphs: [
            "SThe first step in getting treated with ketamine infusion therapy is to talk to your provider. If you’re interested in getting treatments with us at KlearMind Ketamine and IV Hydration Clinics, our friendly and experienced staff will gather information on your symptoms, and background. They will learn about the treatments that you’ve tried in the past to help you assess whether IV ketamine therapy is right for you.",
            "Our highly trained team will be happy to answer any questions you may have about IV ketamine infusion therapy. From there, you will be able to schedule your treatment sessions.",
            "Your primary care physician will also help you to determine maintenance treatments based on your unique needs.",
              "If you are still searching for relief from depression, anxiety bipolar disorder OCD or other mental health conditions, ketamine infusion therapy might be an option for you.",

                  "Contact us today at (916) 900-6686 or online to set up a consultation. We are here to help."
          ],
        },
      ],
    },

    {
      id: 2,
      heading: "Ketamine Therapy for Depression",
      content: [
        {
          paragraphs: [
            "Chronic pain is a complex and debilitating condition that affects millions of people worldwide. Traditional treatments for chronic pain, such as opioids and nonsteroidal anti-inflammatory drugs (NSAIDs), are associated with numerous side effects and risks, including addiction and overdose. Ketamine therapy is emerging as a promising alternative for chronic pain management, with several studies demonstrating its effectiveness and safety. In this blog, we will explore the benefits of ketamine therapy for chronic pain management.",

          ],
        },
        {
          heading: "What is Ketamine Therapy?",
          paragraphs: [
            "Ketamine is a dissociative anesthetic drug that has been used for decades in surgical procedures and emergency medicine. In recent years, ketamine has gained attention as a potential treatment for various mental health conditions, such as depression, anxiety, and PTSD. Ketamine therapy involves the controlled administration of ketamine in a clinical setting by licensed medical professionals. Ketamine therapy can be administered through intravenous (IV) infusion, nasal spray, or oral tablet.",

                        "How Does Ketamine Therapy Work for Chronic Pain Management",
                        "Ketamine works by blocking a specific type of receptor in the brain called the N-methyl-D-aspartate (NMDA) receptor. This receptor plays a key role in the processing of pain signals, and by blocking it, ketamine can provide pain relief. In addition, ketamine has been shown to have anti-inflammatory effects, which can further alleviate pain."


          ],
        },
        {
          heading: "Benefits of Ketamine Therapy for Chronic Pain Management",
          paragraphs: [
            "1) Rapid Pain Relief: One of the most significant benefits of ketamine therapy for chronic pain management is its rapid onset of action. Many patients report feeling relief within minutes to hours after their first infusion, and the effects can last for several days to weeks.",
            "2) Reduced Need for Opioids: Opioids are commonly prescribed for chronic pain management, but they are associated with numerous risks and side effects. Ketamine therapy can help reduce the need for opioids, which can lower the risk of addiction, overdose, and other adverse effects..",
            "3) Improved Quality of Life: Chronic pain can significantly impact a person’s quality of 3ife, causing physical, emotional, and social distress. Ketamine therapy has been shown to improve overall well-being and quality of life in patients with chronic pain.",
            "4) Fewer Side Effects: Unlike opioids and NSAIDs, ketamine therapy is associated with fewer side effects. The most common side effects of ketamine therapy are mild and include nausea, dizziness, and disorientation, which typically resolve within a few hours.",
            "5) Long-Lasting Effects: While the effects of ketamine therapy can vary from person to person, many patients experience long-lasting pain relief after several sessions of treatment. This can help reduce the need for frequent treatments and improve overall outcomes.",  
            "Chronic pain is a challenging condition to manage, and traditional treatments are associated with significant risks and side effects. Ketamine therapy is emerging as a promising alternative for chronic pain management, with several studies demonstrating its effectiveness and safety. By blocking the NMDA receptor and reducing inflammation, ketamine therapy can provide rapid and long-lasting pain relief, improve overall well-being, and reduce the need for opioids. If you are living with chronic pain, please contact us to see if ketamine therapy is a suitable treatment option for you.",
            "Pergolizzi JV Jr, Raffa RB, LeQuang JA. The Role and Mechanism of Action of NMDA Receptor Antagonist Ketamine in Chronic Pain Management: A Narrative Review. Expert Rev Neurother. 2021;21(2):191-200. doi: 10.1080/14737175.2021.1867834. PMID: 33472621",
            "Xu Q, Li X, Li Y, et al. Ketamine Alleviates Neuropathic Pain and Depression-Like Behavior Induced by Chronic Constriction Injury of the Sciatic Nerve in Rats. Pharmacology. 2020;105(7-8):411-420. doi: 10.1159/000508812. Epub 2020 Apr 2. PMID: 32241375.",
            "Noppers I, Niesters M, Aarts L, Smith T, Sarton E, Dahan A. Ketamine for the Treatment of Chronic Non-Cancer Pain. Expert Opin Pharmacother. 2010;11(14):2417-2429. doi: 10.1517/14656566.2010.515978. PMID: 20846082.",
            "Schwartzman RJ, Alexander GM, Grothusen JR. The Use of Ketamine in Complex Regional Pain Syndrome: Possible Mechanisms. Expert Rev Neurother. 2011;11(5):719-734. doi: 10.1586/ern.11.42. PMID: 21539493.",
            "Noppers IM, Niesters M, Swartjes M, et al. Absence of Long-Term Analgesic Effect from a Single Dose of Intravenous Ketamine on Neuropathic Pain in Patients with Complex Regional Pain Syndrome Type I Pain. Eur J Pain. 2011;15(1):26-31. doi: 10.1016/j.ejpain.2010.06.012. Epub 2010 Aug 4. PMID: 20685168.",
            "Zhai J, Li X, Liang Z, Li Y, Li W, Li H. Ketamine in Anesthetic Dosage for Treatment of Refractory Complex Regional Pain Syndrome: A Case Series. Pain Med. 2019;20(4):839-844. doi: 10.1093/pm/pny156. PMID: 30137598"

          ],
        },

        {
          heading: "How does ketamine treatment work?",
          paragraphs: [
            "Ketamine works differently than antidepressants, which can take weeks to months to produce results. Traditional antidepressants, known as selective serotonin reuptake inhibitors (SSRIs), focus on regulating serotonin hormone levels. Ketamine is unique. It acts on NMDA (N-methyl-D-aspartate) receptors and increases glutamate levels. Glutamate is one of the brain’s most powerful chemical messengers..",
            "Increasing glutamate helps to strengthen and restore the neural connections and pathways in the areas of the brain most impaired by depression.",
            "So this is what supports our brain's neuroplasticity. As a result, we experience positive changes in brain circuit function and improved mood regulation.",
            "Given in low doses, ketamine infusion therapy can produce rapid and significant improvement in symptoms, often within a few hours to days. Compared to antidepressants, increasing your glutamate levels with ketamine yields a greater and more substantial impact on brain cells with only one single dose."

          ],
        },

        {
          heading: "What is a ketamine therapy session like?",
          paragraphs: [
            "Ketamine infusion must always be administered by specially trained medical personnel in a certified clinical setting because it is given intravenously and is considered a controlled substance. Most patients receive it as an outpatient and are able to go home within a couple of hours.",
            "At KlearMind Ketamine & IV Hydration Clinics, we offer ketamine infusion therapy in all modalities in Sacramento, Roseville, and surrounding areas. The infusion process generally lasts 40 minutes. Including monitoring, journaling and integrating, the entire session takes about an hour and a half to two hours.",
          
          ],
        },

        {
          heading: "What does ketamine therapy actually feel like?",
          paragraphs: [
            "At the beginning of the session, we will seat you in a comfortable chair with blankets if needed. Once you’re settled in your chair, your team at KlearMind will let you know when the IV has begun. Patients report a calm and relaxing feeling. As the treatment progresses, you might feel increasingly light or faint. Some patients report feeling like they are floating.",
            "Some individuals experience a sensation of a slight separation between themselves and their bodies. For some, your hands and feet may feel very far away. Others progressively feel more separation between themselves and the different parts of consciousness. For example, their thoughts, feelings, bodily sensations, and perception all seem like separate experiences. For reference, these sensations are considered to be the dissociative effects of ketamine.",
          
          ],
        },


        
        {
          heading: "How do patients handle these sensations?",
          paragraphs: [
            "Patients generally tolerate these sensations well, reporting the experience as pleasant or profound or spiritual During these sensations, someone struggling with anxiety, depression, or rumination will feel much less of these symptoms. Some may even feel distant from those negative symptoms.",
            "In rare instances, patients may have a negative experience. We have psychiatric professionals on-site constantly monitoring your session to help manage these rare cases. The event is usually brief and goes away completely within 10-15 minutes after stopping the infusion treatment.",
          
          ],
        },

        {
          heading: "What is the typical ketamine treatment?",
          paragraphs: [
            "KlearMind Ketamine & IV Hydration Clinics recommends 6 ketamine infusion therapy sessions. 6 ketamine treatments for three-4 weeks. The average is 1-2 treatments per week. Your clinician will review this with you during your initial consultation.",
            "If you respond well and your symptoms are successfully controlled following this initial course of treatment, your provider will schedule follow-up sessions. During these sessions, you will work with your clinician to determine long-term treatment plans as needed. If a primary care provider believes a patient may benefit from maintenance treatments, then you may have an infusion every two to four weeks after the initial 6 doses.",
          
          ],
        },

        {
          heading: "What are the side effects of ketamine therapy?",
          paragraphs: [
            "Side effects range from each individual. The side effects usually only last during the treatment session. While you may not experience any side effects, the most common side effect of IV ketamine infusion therapy include:",
            "Disassociation Double vision Dream-like state Elevated blood pressure Elevated heart rate Feeling strange or loopy Loss of appetite Nausea Slight pain where injected Trouble speaking",
          
          ],
        },


        {
          heading: "Where can I get ketamine treatments in Sacramento or Roseville?",
          paragraphs: [
            "SThe first step in getting treated with ketamine infusion therapy is to talk to your provider. If you’re interested in getting treatments with us at KlearMind Ketamine and IV Hydration Clinics, our friendly and experienced staff will gather information on your symptoms, and background. They will learn about the treatments that you’ve tried in the past to help you assess whether IV ketamine therapy is right for you.",
            "Our highly trained team will be happy to answer any questions you may have about IV ketamine infusion therapy. From there, you will be able to schedule your treatment sessions.",
            "Your primary care physician will also help you to determine maintenance treatments based on your unique needs.",
              "If you are still searching for relief from depression, anxiety bipolar disorder OCD or other mental health conditions, ketamine infusion therapy might be an option for you.",

                  "Contact us today at (916) 900-6686 or online to set up a consultation. We are here to help."
          ],
        },
      ],
    },
    {
      id: 3,
      heading: "Exploring the Benefits of Ketamine Therapy for Chronic Pain Management",
      
      content: [
        {
          paragraphs: [
            "Chronic pain is a complex and debilitating condition that affects millions of people worldwide. Traditional treatments for chronic pain, such as opioids and nonsteroidal anti-inflammatory drugs (NSAIDs), are associated with numerous side effects and risks, including addiction and overdose. Ketamine therapy is emerging as a promising alternative for chronic pain management, with several studies demonstrating its effectiveness and safety. In this blog, we will explore the benefits of ketamine therapy for chronic pain management.",

          ],
        },
        {
          heading: "What is Ketamine Therapy?",
          paragraphs: [
            "Ketamine is a dissociative anesthetic drug that has been used for decades in surgical procedures and emergency medicine. In recent years, ketamine has gained attention as a potential treatment for various mental health conditions, such as depression, anxiety, and PTSD. Ketamine therapy involves the controlled administration of ketamine in a clinical setting by licensed medical professionals. Ketamine therapy can be administered through intravenous (IV) infusion, nasal spray, or oral tablet.",

                        "How Does Ketamine Therapy Work for Chronic Pain Management",
                        "Ketamine works by blocking a specific type of receptor in the brain called the N-methyl-D-aspartate (NMDA) receptor. This receptor plays a key role in the processing of pain signals, and by blocking it, ketamine can provide pain relief. In addition, ketamine has been shown to have anti-inflammatory effects, which can further alleviate pain."


          ],
        },
        {
          heading: "Benefits of Ketamine Therapy for Chronic Pain Management",
          paragraphs: [
            "1) Rapid Pain Relief: One of the most significant benefits of ketamine therapy for chronic pain management is its rapid onset of action. Many patients report feeling relief within minutes to hours after their first infusion, and the effects can last for several days to weeks.",
            "2) Reduced Need for Opioids: Opioids are commonly prescribed for chronic pain management, but they are associated with numerous risks and side effects. Ketamine therapy can help reduce the need for opioids, which can lower the risk of addiction, overdose, and other adverse effects..",
            "3) Improved Quality of Life: Chronic pain can significantly impact a person’s quality of 3ife, causing physical, emotional, and social distress. Ketamine therapy has been shown to improve overall well-being and quality of life in patients with chronic pain.",
            "4) Fewer Side Effects: Unlike opioids and NSAIDs, ketamine therapy is associated with fewer side effects. The most common side effects of ketamine therapy are mild and include nausea, dizziness, and disorientation, which typically resolve within a few hours.",
            "5) Long-Lasting Effects: While the effects of ketamine therapy can vary from person to person, many patients experience long-lasting pain relief after several sessions of treatment. This can help reduce the need for frequent treatments and improve overall outcomes.",  
            "Chronic pain is a challenging condition to manage, and traditional treatments are associated with significant risks and side effects. Ketamine therapy is emerging as a promising alternative for chronic pain management, with several studies demonstrating its effectiveness and safety. By blocking the NMDA receptor and reducing inflammation, ketamine therapy can provide rapid and long-lasting pain relief, improve overall well-being, and reduce the need for opioids. If you are living with chronic pain, please contact us to see if ketamine therapy is a suitable treatment option for you.",
            "Pergolizzi JV Jr, Raffa RB, LeQuang JA. The Role and Mechanism of Action of NMDA Receptor Antagonist Ketamine in Chronic Pain Management: A Narrative Review. Expert Rev Neurother. 2021;21(2):191-200. doi: 10.1080/14737175.2021.1867834. PMID: 33472621",
            "Xu Q, Li X, Li Y, et al. Ketamine Alleviates Neuropathic Pain and Depression-Like Behavior Induced by Chronic Constriction Injury of the Sciatic Nerve in Rats. Pharmacology. 2020;105(7-8):411-420. doi: 10.1159/000508812. Epub 2020 Apr 2. PMID: 32241375.",
            "Noppers I, Niesters M, Aarts L, Smith T, Sarton E, Dahan A. Ketamine for the Treatment of Chronic Non-Cancer Pain. Expert Opin Pharmacother. 2010;11(14):2417-2429. doi: 10.1517/14656566.2010.515978. PMID: 20846082.",
            "Schwartzman RJ, Alexander GM, Grothusen JR. The Use of Ketamine in Complex Regional Pain Syndrome: Possible Mechanisms. Expert Rev Neurother. 2011;11(5):719-734. doi: 10.1586/ern.11.42. PMID: 21539493.",
            "Noppers IM, Niesters M, Swartjes M, et al. Absence of Long-Term Analgesic Effect from a Single Dose of Intravenous Ketamine on Neuropathic Pain in Patients with Complex Regional Pain Syndrome Type I Pain. Eur J Pain. 2011;15(1):26-31. doi: 10.1016/j.ejpain.2010.06.012. Epub 2010 Aug 4. PMID: 20685168.",
            "Zhai J, Li X, Liang Z, Li Y, Li W, Li H. Ketamine in Anesthetic Dosage for Treatment of Refractory Complex Regional Pain Syndrome: A Case Series. Pain Med. 2019;20(4):839-844. doi: 10.1093/pm/pny156. PMID: 30137598"

          ],
        },

        {
          heading: "How does ketamine treatment work?",
          paragraphs: [
            "Ketamine works differently than antidepressants, which can take weeks to months to produce results. Traditional antidepressants, known as selective serotonin reuptake inhibitors (SSRIs), focus on regulating serotonin hormone levels. Ketamine is unique. It acts on NMDA (N-methyl-D-aspartate) receptors and increases glutamate levels. Glutamate is one of the brain’s most powerful chemical messengers..",
            "Increasing glutamate helps to strengthen and restore the neural connections and pathways in the areas of the brain most impaired by depression.",
            "So this is what supports our brain's neuroplasticity. As a result, we experience positive changes in brain circuit function and improved mood regulation.",
            "Given in low doses, ketamine infusion therapy can produce rapid and significant improvement in symptoms, often within a few hours to days. Compared to antidepressants, increasing your glutamate levels with ketamine yields a greater and more substantial impact on brain cells with only one single dose."

          ],
        },

        {
          heading: "What is a ketamine therapy session like?",
          paragraphs: [
            "Ketamine infusion must always be administered by specially trained medical personnel in a certified clinical setting because it is given intravenously and is considered a controlled substance. Most patients receive it as an outpatient and are able to go home within a couple of hours.",
            "At KlearMind Ketamine & IV Hydration Clinics, we offer ketamine infusion therapy in all modalities in Sacramento, Roseville, and surrounding areas. The infusion process generally lasts 40 minutes. Including monitoring, journaling and integrating, the entire session takes about an hour and a half to two hours.",
          
          ],
        },

        {
          heading: "What does ketamine therapy actually feel like?",
          paragraphs: [
            "At the beginning of the session, we will seat you in a comfortable chair with blankets if needed. Once you’re settled in your chair, your team at KlearMind will let you know when the IV has begun. Patients report a calm and relaxing feeling. As the treatment progresses, you might feel increasingly light or faint. Some patients report feeling like they are floating.",
            "Some individuals experience a sensation of a slight separation between themselves and their bodies. For some, your hands and feet may feel very far away. Others progressively feel more separation between themselves and the different parts of consciousness. For example, their thoughts, feelings, bodily sensations, and perception all seem like separate experiences. For reference, these sensations are considered to be the dissociative effects of ketamine.",
          
          ],
        },


        
        {
          heading: "How do patients handle these sensations?",
          paragraphs: [
            "Patients generally tolerate these sensations well, reporting the experience as pleasant or profound or spiritual During these sensations, someone struggling with anxiety, depression, or rumination will feel much less of these symptoms. Some may even feel distant from those negative symptoms.",
            "In rare instances, patients may have a negative experience. We have psychiatric professionals on-site constantly monitoring your session to help manage these rare cases. The event is usually brief and goes away completely within 10-15 minutes after stopping the infusion treatment.",
          
          ],
        },

        {
          heading: "What is the typical ketamine treatment?",
          paragraphs: [
            "KlearMind Ketamine & IV Hydration Clinics recommends 6 ketamine infusion therapy sessions. 6 ketamine treatments for three-4 weeks. The average is 1-2 treatments per week. Your clinician will review this with you during your initial consultation.",
            "If you respond well and your symptoms are successfully controlled following this initial course of treatment, your provider will schedule follow-up sessions. During these sessions, you will work with your clinician to determine long-term treatment plans as needed. If a primary care provider believes a patient may benefit from maintenance treatments, then you may have an infusion every two to four weeks after the initial 6 doses.",
          
          ],
        },

        {
          heading: "What are the side effects of ketamine therapy?",
          paragraphs: [
            "Side effects range from each individual. The side effects usually only last during the treatment session. While you may not experience any side effects, the most common side effect of IV ketamine infusion therapy include:",
            "Disassociation Double vision Dream-like state Elevated blood pressure Elevated heart rate Feeling strange or loopy Loss of appetite Nausea Slight pain where injected Trouble speaking",
          
          ],
        },


        {
          heading: "Where can I get ketamine treatments in Sacramento or Roseville?",
          paragraphs: [
            "SThe first step in getting treated with ketamine infusion therapy is to talk to your provider. If you’re interested in getting treatments with us at KlearMind Ketamine and IV Hydration Clinics, our friendly and experienced staff will gather information on your symptoms, and background. They will learn about the treatments that you’ve tried in the past to help you assess whether IV ketamine therapy is right for you.",
            "Our highly trained team will be happy to answer any questions you may have about IV ketamine infusion therapy. From there, you will be able to schedule your treatment sessions.",
            "Your primary care physician will also help you to determine maintenance treatments based on your unique needs.",
              "If you are still searching for relief from depression, anxiety bipolar disorder OCD or other mental health conditions, ketamine infusion therapy might be an option for you.",

                  "Contact us today at (916) 900-6686 or online to set up a consultation. We are here to help."
          ],
        },
      ],
    },
  ];

  const current = data.find((item) => item.id === Number(id));
  const content = clientdetails.find((item) => item.id === Number(id));

  if (!current || !content)
    return <h1 className="text-center text-2xl mt-20">Data not found 😢</h1>;

  return (
    <div className="w-full lg:py-33 py-25 lg:px-21 md:px-21 ">
 <Ketamine
  heading="July 15, 2024"
  text={current.title}
  image={current.image}
  customClass="text-[5vw] lg:text-4xl md:text-4xl"
/>

      <div className="lg:px-50 px-6 lg:py-13 py-10 w-full">
        <h4 className="figee lg:text-[1vw] pb-3 text-[#6b6b6d]">
          IV Ketamine Therapy - What Is Ketamine Infusion and How Does It Work?
        </h4>
        <h5 className="figee italic lg:text-[1vw] text-[#6b6b6d]">
          Get Relief with the Premier Choice in Ketamine Therapy & IV Hydration
          in Sacramento and Roseville.
        </h5>

        <div className="figee w-full lg:mt-9 mt-5">
          {/* ✅ for id=1 (multiple content sections) */}
          {content.content ? (
            content.content.map((section, i) => (
              <div key={i} className="mb-10">
                <h2 className="figee lg:text-[2vw] md:text-[2vw] text-[4.4vw] text-[#474343]">
                  {section.heading}
                </h2>
                <div className="mt-3 text-[#6b6b6d] leading-relaxed space-y-4">
                  {section.paragraphs.map((p, index) => (
                    <p key={index} >{p}</p>
                  ))}
                </div>
              </div>
            ))
          ) : (
            // ✅ for id=2,3 (single heading + paragraphs)
            <div>
              <h2 className="figee text-[2vw] text-[#474343]">
                {content.heading}
              </h2>
              <div className="mt-3 text-[#6b6b6d] leading-relaxed space-y-4">
                {content.paragraphs.map((p, index) => (
                  <p key={index}>{p}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default KlearmindDetail;
