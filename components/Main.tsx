"use client"
import React from 'react';
import style from '../styles/main.module.css';
import { motion } from 'framer-motion';

const Main = () => {

  return (
    <div className={style.mainContainer}>
        <motion.h1
        initial={{opacity: 0, y: -10}}
        whileInView={{opacity: 1, y:0}}
        transition={{delay: .2}}>SAS2</motion.h1>
        <motion.p
        initial={{opacity: 0, y: -10}}
        whileInView={{opacity: 1, y:0}}
        transition={{delay: .4}}>In Unreal Engine</motion.p>
    </div>
  )
}

export default Main
