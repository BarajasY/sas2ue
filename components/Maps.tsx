"use client"
import React, { useState } from 'react';
import { motion, useAnimate } from 'framer-motion';
import style from "@/styles/about.module.css";
import { oldMap, newMaps } from './Images';
import Image from 'next/image';

const Maps = () => {
    const [Map, animate] = useAnimate();
    const [MapCount, setMapCount] = useState(0)

    const handleMapChange = () => {
        animate(Map.current, {opacity: 0, x: -20})

        setTimeout(() => {
          if(MapCount === 1) {
            setMapCount(0)
          } else {
            setMapCount(1)
          }
          animate(Map.current, {opacity: 1, x:0})
        }, 500)


      }

  return (
    <motion.div
    initial={{opacity: 0, y: -30}}
    whileInView={{opacity: 1, y:0}}
    className={style.aboutMap}>
        <h1>Original 2D Game Map ={">"} New 3D Game Map</h1>
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
            <div ref={Map}>
              <Image src={newMaps[MapCount]} alt="Lights Off"/>
            </div>
          </article>
          <article className={style.MapsButton} onClick={() => handleMapChange()}>
            <button>{MapCount === 0 ? "Lights On" : "Lights Off"}</button>
          </article>
        </section>
      </div>
    </motion.div>
  )
}

export default Maps
