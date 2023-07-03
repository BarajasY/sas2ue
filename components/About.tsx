"use client";
import React, { useState } from "react";
import style from "@/styles/about.module.css";
import Image from "next/image";
import { oldZombies, newZombies, oldMap, newMaps } from "./Images";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { motion, useAnimate } from "framer-motion";
import Maps from "./Maps";

const About = () => {
  const [Count, setCount] = useState(0);
  const [scope, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();

  const decreaseCount = () => {
    animate2(scope2.current, { opacity: 0, x: 20 });
    animate(scope.current, { opacity: 0, x: 20 });

    setTimeout(() => {
      if (Count === 0) {
        setCount(3);
      } else {
        setCount((c) => c - 1);
      }
      animate2(scope2.current, { opacity: 1, x: 0 });
      animate(scope.current, { opacity: 1, x: 0 });
    }, 300);
  };

  const increaseCount = () => {
    animate2(scope2.current, { opacity: 0, x: -20 });
    animate(scope.current, { opacity: 0, x: -20 });

    setTimeout(() => {
      if (Count === 3) {
        setCount(0);
      } else {
        setCount((c) => c + 1);
      }
      animate2(scope2.current, { opacity: 1, x: 0 });
      animate(scope.current, { opacity: 1, x: 0 });
    }, 300);
  };

  return (
    <div className={style.aboutContainer}>
      <div className={style.modelsContent}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          New Vox Models
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Recreated the original SAS2 models using the MagicaVoxel software.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={style.aboutModels}
        >
          <div className={style.aboutZombies}>
            <h1>SAS2</h1>
            <section>
              <MdArrowLeft
                className={style.aboutIcon}
                onClick={() => decreaseCount()}
              />
              <article ref={scope2}>
                <Image src={oldZombies[Count]} alt="OldZombies" />
              </article>
              <MdArrowRight
                className={style.aboutIcon}
                onClick={() => increaseCount()}
              />
            </section>
          </div>
          <div className={style.aboutZombies}>
            <h1>SAS2:Unreal Engine</h1>
            <section>
              <MdArrowLeft
                className={style.aboutIcon}
                onClick={() => decreaseCount()}
              />
              <article ref={scope}>
                <Image src={newZombies[Count]} alt="OldZombies" />
              </article>
              <MdArrowRight
                className={style.aboutIcon}
                onClick={() => increaseCount()}
              />
            </section>
          </div>
        </motion.div>
      </div>
      <Maps />
    </div>
  );
};

export default About;
