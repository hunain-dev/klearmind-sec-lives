import React from "react";
import { motion } from "framer-motion";
import sunrise from "../../assets/images/sunrise.svg";
import Button from "../../Components/Button";

const Therapydelivered = () => {
  return (
    <div className="m-auto lg:mt-3 mt-2 lg:pb-25 pb-10 md:pb-20">
      <div className="relative h-full lg:p-10 p-0 m-auto overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <motion.img
          src={sunrise}
          alt=""
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }} 
          // triggers when 50% of the image is visible
          className="lg:h-[32vw] md:h-[45vw] h-[80vw] object-contain"
        />

        {/* Text and Button content */}
        <div className="absolute h-full lg:mt-53 mt-29 md:mt-41 flex items-center flex-col justify-center text-center lg:gap-2 gap-2">

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="flex items-center gap-2 justify-start lg:pb-0 pb-1"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
            <span className="figee lg:text-[2vh] md:text-[2vw] text-[3vw] text-gray-600 tracking-wide">
              What Is Klearmind?
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            className="fontspring lg:text-[3.1vw] md:text-[4vw] lg:leading-13 text-2xl text-[#361911]"
          >
            Ketamine therapy delivered <br /> in a calm and compassionate <br /> environment
          </motion.h2>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <Button
              btn="Learn more"
              fontSize="lg:text-[1vw] md:text-[2vw]"
              padding="lg:py-2 lg:mt-4 lg:px-9 py-2"
              border="border-gray-700"
              hoverEffect={false}
              to="/Ketaminetherapy"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Therapydelivered;
