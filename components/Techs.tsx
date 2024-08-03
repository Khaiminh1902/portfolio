import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import Image from 'next/image'
import { RiNextjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { motion } from 'framer-motion'
import { Variants } from "framer-motion";

const IconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Techs = () => {
  return (
    <div className='relative pb-24' id='techs'>
      <h1 className='text-3xl font-bold text-center'>My <span className='text-purple'>Tech</span> Stacks</h1>
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-5 pt-20'>
        <motion.div 
          variants={IconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl relative inline-flex overflow-hidden w-[110px] h-[110px] p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] cursor-none animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <RiReactjsLine className='text-7xl text-cyan-400' />
          </span>
        </motion.div>
        <motion.div 
          variants={IconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl relative inline-flex overflow-hidden w-[110px] h-[110px] p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] cursor-none animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <RiNextjsLine className='text-7xl text-white' />
          </span>
        </motion.div>
        <motion.div 
          variants={IconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl relative inline-flex overflow-hidden w-[110px] h-[110px] p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] cursor-none animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <FaNodeJs className='text-7xl text-[#68a063]' />
          </span>
        </motion.div>
        <motion.div 
          variants={IconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl relative inline-flex overflow-hidden w-[110px] h-[110px] p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] cursor-none animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Image
              src={'/javascript.png'}
              alt='javascript'
              width={60}
              height={60}
              className='text-7xl text-cyan-400 rounded-xl' />
          </span>
        </motion.div>
        <motion.div 
          variants={IconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl relative inline-flex overflow-hidden w-[110px] h-[110px] p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] cursor-none animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Image
              src={'/typescript.png'}
              alt='javascript'
              width={60}
              height={60}
              className='text-7xl text-cyan-400 rounded-xl' />
          </span>
        </motion.div>
        <motion.div 
          variants={IconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl relative inline-flex overflow-hidden w-[110px] h-[110px] p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] cursor-none animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Image
              src={'/python.jpeg'}
              alt='typescript'
              width={60}
              height={60}
              className='text-7xl text-cyan-400 rounded-xl' />
          </span>
        </motion.div>
        <motion.div 
          variants={IconVariants(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl relative inline-flex overflow-hidden w-[110px] h-[110px] p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] cursor-none animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Image
              src={'/HTML.jpg'}
              alt='javascript'
              width={60}
              height={60}
              className='text-7xl text-cyan-400 rounded-xl' />
          </span>
        </motion.div>
        <motion.div 
          variants={IconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl relative inline-flex overflow-hidden w-[110px] h-[110px] p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] cursor-none animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full items-center justify-center rounded-2xl bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <Image
              src={'/CSS.jpg'}
              alt='javascript'
              width={60}
              height={60}
              className='text-7xl text-cyan-400 rounded-xl' />
          </span>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Techs

