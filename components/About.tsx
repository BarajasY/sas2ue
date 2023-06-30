import React from 'react'
import style from '@/styles/about.module.css';
import Image from 'next/image';
import saslogo from "@/public/saslogo.webp";

const About = () => {
  return (
    <div className={style.aboutContainer}>
        <div className={style.aboutHeader}>
            <h1>Based in the old Flash Player Game SAS2</h1>
            <Image src={saslogo} alt='Sas2Logo'/>
        </div>
    </div>
  )
}

export default About
