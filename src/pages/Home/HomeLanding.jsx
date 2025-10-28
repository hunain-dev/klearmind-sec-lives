import React from 'react'
import { motion } from 'framer-motion'
import Lifedeserve from '../../Components/Lifedeserve'
import bloomlife from "../../assets/Video/Bloomlife.mp4"

const HomeLanding = () => {
  return (
    <div className='lg:py-14 md:py-19 py-0 h-full w-full'>
      {/* Container fade-in-up */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Lifedeserve
          videoSrc={bloomlife}
          classname="fontspring text-center text-3xl lg:px-0 px-3 lg:mt-0 mt-4 lg:text-5xl"
          heading={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            >
              Bloom into the life <br /> you deserve with Klearmind
            </motion.div>
          }
          paragh={
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
            >
              Safe, evidence-based Ketamine infusions for psychiatric disorders <br />
              and chronic pain management
            </motion.div>
          }
        />
      </motion.div>
    </div>
  )
}

export default HomeLanding
