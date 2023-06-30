"use client"
import React from 'react';
import style from '../styles/main.module.css';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Main = () => {
  const router = useRouter();

  setTimeout(() => {
    router.push("/about")
  }, 1700)

  return (
    <div className={style.mainContainer}>
        <motion.h1
        initial={{opacity: 0, y: -10}}
        whileInView={{opacity: 1, y:0}}
        transition={{delay: .5}}>SAS2</motion.h1>
        <motion.p
        initial={{opacity: 0, y: -10}}
        whileInView={{opacity: 1, y:0}}
        transition={{delay: 1}}>In Unreal Engine</motion.p>
    </div>
  )
}

export default Main
