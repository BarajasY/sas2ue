"use client"
import { motion } from 'framer-motion';
import React from 'react';
import style from "@/styles/navbar.module.css";
import {HiOutlineArrowSmLeft} from "react-icons/hi"
import { usePathname, useRouter } from 'next/navigation';


const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.div
    initial={{opacity: 0, y: 10}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 1, delay: 3.5}}
    className={style.navbarContainer}>
      {pathname === "/" ?
        null
      :
        <HiOutlineArrowSmLeft className={style.navbarIcon} onClick={() => router.back()}/>
      }
    </motion.div>
  )
}

export default Navbar
