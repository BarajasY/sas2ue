"use client"
import React, {useState} from 'react';
import { SASUEImages } from './Images';
import style from "@/styles/aboutImages.module.css";
import { motion, useAnimate } from 'framer-motion';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import Image from 'next/image';


const ImagesCollage = () => {
  const [ImageCount, setImageCount] = useState(0)
  const [scope, animate] = useAnimate();

  const decreaseCount = () => {
    animate(scope.current, {opacity: 0, x: -30})
    setTimeout(() => {
      if(ImageCount === 0) {
        setImageCount(6)
      }
      else {
        setImageCount(c => c - 1)
      }
      animate(scope.current, {opacity: 1, x: 0})
    }, 400);
  }

  const increaseCount = () => {
    animate(scope.current, {opacity: 0, x: 30})
    setTimeout(() => {
      if(ImageCount === 6) {
        setImageCount(0)
      }
      else {
        setImageCount(c => c + 1)
      }
      animate(scope.current, {opacity: 1, x: 0})
    }, 400);
  }

  return (
    <motion.div
    initial={{opacity: 0, y: -30}}
    whileInView={{opacity: 1, y:0}}
    className={style.imagesContainer}>
      <h1>In game images</h1>
      <div className={style.imagesContent}>
        <MdArrowLeft className={style.imagesIcon} onClick={() => decreaseCount()}/>
        <article ref={scope}>
          <Image src={SASUEImages[ImageCount]} alt='Collage' />
        </article>
        <MdArrowRight className={style.imagesIcon} onClick={() => increaseCount()}/>
      </div>
    </motion.div>
  )
}

export default ImagesCollage
