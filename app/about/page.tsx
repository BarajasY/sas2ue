import React from 'react'
import style from '@/styles/pages.module.css';
import About from '@/components/About';
import ImagesCollage from '@/components/ImagesCollage';

const page = () => {
  return (
    <div className={style.AboutPageContainer}>
        <About />
        <ImagesCollage />
    </div>
  )
}

export default page
