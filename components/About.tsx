"use client";
import React, { useState } from "react";
import style from "@/styles/about.module.css";
import Image from "next/image";
import { oldZombies, newZombies, oldMap, newMaps } from "./Images";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import { motion, useAnimate } from "framer-motion";

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
      <h1>Converting the Flash Player game into a 3D zombie shooter</h1>
      <p>Models</p>
      <div className={style.aboutModels}>
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
      </div>
      <div className={style.aboutMap}>
        <p>Map</p>
        <div className={style.Maps}>
          <section>
            <p>SAS2</p>
            <article>
              <Image src={oldMap} alt="Old SAS2 map" />
            </article>
          </section>
          <section>
            <p>SAS2: Unreal Engine</p>
            <article>
              <Image src={newMaps[1]} alt="New Map" />
              <Image src={newMaps[0]} alt="New Map" id={style.backMap}/>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
