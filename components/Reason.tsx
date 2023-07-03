"use client"
import React from 'react'
import style from '@/styles/reason.module.css';
import { motion } from 'framer-motion';

const Reason = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: -30}}
    whileInView={{opacity: 1, y:0}}
    className={style.reasonContainer}>
        <h1>WHY?</h1>
        <br />
        <p>I believe every single person who is studying or into software development, has ever had this thought of</p>
        <p>dedicating themselves to produce games. Or at least trying out how to build a game, succeeding or failing</p>
        <p>it really doesn&apos;t matter, but I&apos;m convinced everyone has had that thought.</p>
        <br />
        <p>Furthermore, before touching Unreal Engine, I had a solid year and a half completely into web development, </p>
        <p>I can&apos;t say i got tired, I just simply wanted to freshen my thoughts and challenge myself to build something</p>
        <p>completely different.</p>
        <br />
        <p>Changing my development tools from Visual Studio Code into Unreal Engine and it&apos;s blueprints language. Then</p>
        <p>trying to figure out how to make models, which honestly I just went with voxels since it&apos;s easier for me and</p>
        <p>the software to make vox models (MagicaVoxel) is pretty light and open source.</p>
        <br />
        <p>Lastly before taking on this callenge of game development, when I saw huge games with many assets and features,</p>
        <p>I always tought that it simply was impossible. However, now that I have this (early) knowledge of game devlopment</p>
        <p>I am able to say that some projects now seem reachable and not impossible.</p>
    </motion.div>
  )
}

export default Reason
